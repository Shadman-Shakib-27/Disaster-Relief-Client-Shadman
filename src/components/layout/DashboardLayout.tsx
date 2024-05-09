import Sidebar from "@/pages/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-5">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
