import axios from "axios";
import { useEffect, useState } from "react";
import { FiTrendingUp, FiArrowUpRight } from "react-icons/fi";
import { MdPlayArrow, MdPause, MdStop } from "react-icons/md";
import api from "../services/api";
import Stat from "../components/dashboard/Stat";
import ProjectAnalytics from "../components/dashboard/ProjectAnalytics";
import ProjectProgress from "../components/dashboard/ProjectProgress";
import TimeTracker from "../components/dashboard/TimeTracker";
import Projects from "../components/dashboard/Projects";
import TeamCollaboration from "../components/dashboard/TeamCollaboration";

const Dashboard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDashboard();
  }, []);
  console.log(data);
  const stats = [
    {
      title: "Total Projects",
      value: "24",
      trend: "Increased from last month",
      color: "bg-green-700",
    },
    {
      title: "Ended Projects",
      value: "10",
      trend: "Increased from last month",
      color: "bg-white",
    },
    {
      title: "Running Projects",
      value: "12",
      trend: "Increased from last month",
      color: "bg-white",
    },
    {
      title: "Pending Project",
      value: "2",
      trend: "On Discuss",
      color: "bg-white",
    },
  ];

  const projects = [
    {
      title: "Develop API Endpoints",
      date: "Due date: Nov 30, 2024",
      icon: "⚡",
      color: "text-blue-600",
    },
    {
      title: "Onboarding Flow",
      date: "Due date: Dec 1, 2024",
      icon: "🎯",
      color: "text-cyan-600",
    },
    {
      title: "Build Dashboard",
      date: "Due date: Nov 30, 2024",
      icon: "✨",
      color: "text-purple-600",
    },
    {
      title: "Optimize Page Load",
      date: "Due date: Dec 5, 2024",
      icon: "🍕",
      color: "text-yellow-600",
    },
    {
      title: "Cross-Browser Testing",
      date: "Due date: Dec 8, 2024",
      icon: "🎨",
      color: "text-pink-600",
    },
  ];

  //   const team = [
  //     {
  //       name: "Alexandra Deff",
  //       task: "Github Project Repository",
  //       status: "Completed",
  //       avatar: "AD",
  //     },
  //     {
  //       name: "Edwin Adenike",
  //       task: "Integrate User Authentication System",
  //       status: "In Progress",
  //       avatar: "EA",
  //     },
  //     {
  //       name: "Isaac Oluwatemiloun",
  //       task: "Develop User Profile Functionality",
  //       status: "Pending",
  //       avatar: "IO",
  //     },
  //     {
  //       name: "David Oshooli",
  //       task: "Responsive Layout for Homepage",
  //       status: "In Progress",
  //       avatar: "DO",
  //     },
  //   ];

  return (
    <div className="flex-1 bg-gray-50 p-8 overflow-auto">
      <div className="flex md:flex-row flex-col items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-500">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-800 flex items-center gap-2">
            + Add Project
          </button>
          <button className="bg-white text-gray-700 px-6 py-2.5 rounded-lg font-medium border border-gray-300 hover:bg-gray-50">
            Import Data
          </button>
        </div>
      </div>
      {/* project stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 items-stretch">
        {stats.map((stat, index) => (
          <Stat stat={stat} index={index}></Stat>
        ))}
      </div>

      <div className="items-start grid grid-cols-2 md:grid-cols-12 gap-4 mb-8">
        <div className="col-span-9">
          {/* Project Analysis and Reminders Container */}
          <div className="grid grid-cols-9 gap-6 items-stretch">
            {/* Project Analysis - Takes up 6 of 9 columns */}
            <div className="col-span-6">
              <ProjectAnalytics />
            </div>

            {/* Reminders - Takes up 3 of 9 columns */}
            <div className="col-span-3 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Reminders
                </h3>
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-1 leading-tight">
                    Meeting with Arc Company
                  </h4>
                  <p className="text-sm text-gray-400 font-medium">
                    Time : 02.00 pm - 04.00 pm
                  </p>
                </div>
              </div>

              <button className="w-full bg-[#14532D] text-white py-3.5 rounded-2xl font-semibold hover:bg-opacity-90 flex items-center justify-center gap-2 transition-all">
                <div className="bg-white/20 p-1 rounded-md">
                  <MdPlayArrow className="w-5 h-5 fill-white" />
                </div>
                Start Meeting
              </button>
            </div>
          </div>
          {/* team collaboration and project progress  */}
          <div className="items-start grid grid-cols-7">
            {/* team collaboration */}
            <TeamCollaboration users={data?.users}/>
            {/* project progress */}
            <ProjectProgress/>
          </div>
        </div>

        {/* project and time tracker */}
        <div className="col-span-3">
          {/* project */}
          <Projects/>
          {/* time tracker */}
          <TimeTracker/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
