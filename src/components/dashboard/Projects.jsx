import React from "react";
import { VscCode } from "react-icons/vsc";
import { MdPersonAddAlt1 } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { LuTestTube } from "react-icons/lu";


const projects = [
  {
    title: "Develop API Endpoints",
    date: "Nov 26, 2024",
    icon: <VscCode size={16} color="#3B82F6" />,
    bg: "bg-blue-50",
  },
  {
    title: "Onboarding Flow",
    date: "Nov 28, 2024",
    icon: <MdPersonAddAlt1 size={16} color="#14B8A6" />,
    bg: "bg-teal-50",
  },
  {
    title: "Build Dashboard",
    date: "Nov 30, 2024",
    icon: <RiDashboardLine size={16} color="#F97316" />,
    bg: "bg-orange-50",
  },
  {
    title: "Optimize Page Load",
    date: "Dec 5, 2024",
    icon: <TbPlayerTrackNextFilled size={16} color="#EAB308" />,
    bg: "bg-yellow-50",
  },
  {
    title: "Cross-Browser Testing",
    date: "Dec 6, 2024",
    icon: <LuTestTube size={16} color="#A855F7" />,
    bg: "bg-purple-50",
  },
];

const Projects = () => {
  return (
    <div className="bg-white rounded-2xl px-3 pb-4 pt-5 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Project</h3>
        <button className="text-[11px] font-semibold border border-[#14532D] text-[#14532D] px-3 py-1.5 rounded-full hover:bg-gray-50 uppercase tracking-wider">
          + New
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-8 h-8 rounded-lg ${project.bg} flex items-center justify-center flex-shrink-0`}>
              {project.icon}
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-700 leading-tight group-hover:text-green-700 transition-colors">
                {project.title}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Due date: {project.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;