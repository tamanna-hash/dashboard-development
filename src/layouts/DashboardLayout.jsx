import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Dashboard from "../pages/Dashboard";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex min-h-screen bg-base-200">
        {/* Sidebar */}
        <aside className="w-64 bg-base-100 shadow-md">
          <Sidebar />
        </aside>

        {/* Main area */}
        <div className="flex flex-col flex-1">
          {/* Navbar */}
          <header className="h-16 bg-base-100 shadow-sm">
            <Navbar />
          </header>

          {/* Dashboard content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
