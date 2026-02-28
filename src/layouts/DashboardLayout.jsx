import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Dashboard from "../pages/Dashboard";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen poppins">
        <Sidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex flex-col flex-1 min-w-0 lg:ml-74 mt-2 mr-2">
          <header className="sticky top-0 z-30 w-full bg-base-200 rounded-xl shrink-0">
            <Navbar onMenuClick={() => setSidebarOpen(true)} />
          </header>

          <main className="p-6 lg:p-8 mt-2 bg-base-200 rounded-xl flex-1 min-h-screen">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
