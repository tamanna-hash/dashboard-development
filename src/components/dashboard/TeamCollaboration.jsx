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
