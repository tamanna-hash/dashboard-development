import React from "react";

const Projects = () => {
  return (
    <div className="bg-white rounded-2xl px-6 pb-9 pt-6 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Project</h3>
        <button className="text-[11px] font-semibold border border-[#14532D] text-[#14532D] px-3 py-1.5 rounded-full hover:bg-gray-50 uppercase tracking-wider">
          + New
        </button>
      </div>

      <div className="space-y-4">
        {[
          { title: "Develop API Endpoints", date: "Nov 30, 2024", color: "bg-blue-500" },
          { title: "Onboarding Flow", date: "Dec 1, 2024", color: "bg-teal-400" },
          { title: "Build Dashboard", date: "Nov 30, 2024", color: "bg-orange-400" },
          { title: "Optimize Page Load", date: "Dec 5, 2024", color: "bg-yellow-400" },
          { title: "Cross-Browser Testing", date: "Dec 8, 2024", color: "bg-purple-500" },
        ].map((project, index) => (
          <div
            key={index}
            className="flex items-center gap-4 group cursor-pointer"
          >
            {/* Icon / Bullet matching the image */}
            <div
              className={`w-2.5 h-2.5 rounded-full ${project.color} shadow-sm`}
            />
            <div className="flex-1">
              <p className="text-[12px] font-semibold text-gray-800 leading-tight group-hover:text-green-700 transition-colors">
                {project.title}
              </p>
              <p className="text-[10px] text-gray-500  mt-0.5">
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
