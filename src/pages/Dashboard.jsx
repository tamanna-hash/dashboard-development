import axios from "axios";
import { useEffect, useState } from "react";
import { FiTrendingUp, FiArrowUpRight } from "react-icons/fi";
import { MdPlayArrow, MdPause, MdStop } from "react-icons/md";
import api from "../services/api";
import Stat from "../components/dashboard/Stats";
import ProjectAnalytics from "../components/dashboard/ProjectAnalytics";
import ProjectProgress from "../components/dashboard/ProjectProgress";
import TimeTracker from "../components/dashboard/TimeTracker";
import Projects from "../components/dashboard/Projects";
import TeamCollaboration from "../components/dashboard/TeamCollaboration";
import Reminder from "../components/dashboard/Reminder";

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

return (
    <div className="flex-1">
      {/* Header Section - match design exactly */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 leading-tight">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-400 mt-1">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button className="bg-[#14532D] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full  text-sm hover:bg-green-800 transition-colors flex items-center gap-2 shadow-sm">
            + Add Project
          </button>
          <button className="bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm border-2 border-[#14532D] text-[#14532D] hover:bg-gray-50 transition-colors">
            Import Data
          </button>
        </div>
      </div>

      {/* Stat Cards Row - gap-2 = 24px like design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
        {stats.map((stat, index) => (
          <Stat key={index} stat={stat} index={index} />
        ))}
      </div>

      {/* Main Body Grid - consistent 24px gap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-start">
        
        <div className="lg:col-span-9 space-y-3">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2">
              <ProjectAnalytics />
            </div>
            {/* Reminders Card - padding/gap match design */}
            <Reminder/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-stretch">
            <div className="md:col-span-7">
              <TeamCollaboration users={data?.users} />
            </div>
            <div className="md:col-span-5">
              <ProjectProgress />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <Projects />
          <TimeTracker />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
