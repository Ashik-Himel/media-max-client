import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import DashboardTitle from "../components/dashboard/DashboardTitle";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarShow, setSidebarShow] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
        <DashboardSidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
        <DashboardTitle setSidebarShow={setSidebarShow} />
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;