import React from "react";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";
import avatar3 from "../../assets/avatar3.jpeg";
import avatar4 from "../../assets/avatar4.jpeg";
import avatar5 from "../../assets/avatar5.jpeg";
const TeamCollaboration = ({ users }) => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  console.log(users);
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between mb-5 shrink-0">
        <h3 className="text-lg font-semibold text-gray-800">
          Team Collaboration
        </h3>
        <button className="bg-white px-3 sm:px-4 py-1 sm:py-1 rounded-full text-sm border-2 border-[#14532D] text-[#14532D] hover:bg-gray-50 transition-colors">
          + Add Member
        </button>
      </div>
      <div className="space-y-3 flex-1 min-h-0 overflow-auto scrollbar-hide">
        {users?.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                {user.avatar}
              </div> */}
              <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm">
                <img
                  src={avatars[index % avatars.length]} // Cycles through avatars array
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
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
  );
};

export default TeamCollaboration;
