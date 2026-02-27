import axios from "axios";
import { useEffect, useState } from "react";
import { FiTrendingUp, FiArrowUpRight } from "react-icons/fi";
import { MdPlayArrow, MdPause, MdStop } from "react-icons/md";
import api from "../services/api";
import Stat from "../components/dashboard/Stat";

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
          {/* project analysis and reminders */}
          <div className="grid grid-cols-9">
            {/* project analysis */}
            <div className="bg-white col-span-6 rounded-2xl p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Project Analytics
              </h3>
              <div className="flex items-end justify-between h-48">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 flex-1"
                  >
                    <div
                      className="w-full flex items-end justify-center"
                      style={{ height: "160px" }}
                    >
                      <div
                        className={`w-12 rounded-full transition-all duration-200 hover:opacity-80 ${[1, 3, 6].includes(index) ? "bg-green-700" : "bg-gray-200"}`}
                        style={{
                          height: `${[40, 80, 60, 100, 50, 70, 45][index]}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{day}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* reminders */}
            <div className="bg-white col-span-3 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Reminders
                </h3>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Meeting with Arc Company
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Time : 02:00 pm - 04:00 pm
                </p>
                <button className="w-full bg-green-700 text-white py-3 rounded-xl font-medium hover:bg-green-800 flex items-center justify-center gap-2">
                  <MdPlayArrow className="w-5 h-5" />
                  Start Meeting
                </button>
              </div>
            </div>
          </div>
          {/* team collaboration and project progress  */}
          <div className="grid grid-cols-7">
            {/* team collaboration */}
            <div className="bg-white col-span-4 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Team Collaboration
                </h3>
                <button className="text-sm px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  + Add Member
                </button>
              </div>
              <div className="space-y-4">
                {data?.users.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700"
                          : user.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* project progress */}
            <div className="bg-white col-span-3 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Project Progress
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#e5e7eb"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="8 4"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#15803d"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="206 502"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      41%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* project and time tracker */}
        <div className="col-span-3">
          {/* project */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Project</h3>
              <button className="text-sm text-gray-600 hover:text-gray-900">
                + New
              </button>
            </div>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className={`text-2xl ${project.color}`}>
                    {project.icon}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {project.title}
                    </p>
                    <p className="text-xs text-gray-500">{project.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* time tracker */}
          <div className="bg-green-700  rounded-2xl p-6 text-white relative overflow-hidden">
            <h3 className="text-lg font-semibold mb-8">Time Tracker</h3>
            <div className="text-center mb-8">
              <div className="text-5xl font-bold mb-4">01:24:08</div>
              <div className="flex items-center justify-center gap-3">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-700 hover:bg-gray-100">
                  <MdPause className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600">
                  <MdStop className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
