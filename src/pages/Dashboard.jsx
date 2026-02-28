import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      badge:"5",
      trend: "Increased from last month",
      color: "bg-green-700",
    },
    {
      title: "Ended Projects",
      value: "10",
      badge:"6",
      trend: "Increased from last month",
      color: "bg-white",
    },
    {
      title: "Running Projects",
      value: "12",
      badge:"2",
      trend: "Increased from last month",
      color: "bg-white",
    },
    {
      title: "Pending Project",
      value: "2",
      badge:"",
      trend: "On Discuss",
      color: "bg-white",
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
          <button className="bg-linear-to-b from-[#124c29] via-[#195b32] to-[#28864d] hover:brightness-110 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full  text-sm transition-colors flex items-center gap-2 shadow-sm">
            + Add Project
          </button>
          <button className="bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm border-2 border-[#14532D] text-[#14532D] hover:bg-slate-100 transition-colors">
            Import Data
          </button>
        </div>
      </div>

      {/* Stat Cards Row - subtle entrance + hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="will-change-transform"
          >
            <Stat stat={stat} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Main Body Grid - consistent 24px gap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-start">
        
        <div className="lg:col-span-9 space-y-3">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-stretch">
            <motion.div
              className="md:col-span-2 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            >
              <ProjectAnalytics />
            </motion.div>
            {/* Reminders Card - padding/gap match design */}
            <motion.div
              className="h-full will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
              whileHover={{ y: -3, scale: 1.01 }}
              
            >
              <Reminder />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-stretch">
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
            >
              <TeamCollaboration users={data?.users} />
            </motion.div>
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
            >
              <ProjectProgress />
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="will-change-transform"
          >
            <Projects />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="will-change-transform"
          >
            <TimeTracker />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
