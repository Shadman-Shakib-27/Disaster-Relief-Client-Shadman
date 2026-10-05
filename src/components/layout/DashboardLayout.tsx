import Sidebar from "@/pages/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f2] md:flex">
      <div className="shrink-0 md:w-64">
        <Sidebar />
      </div>
      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
