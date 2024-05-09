import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, ServerIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray h-screen shadow-md p-5 sticky top-0 left-0">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/dashboard"
          className={() =>
            cn(
              "flex gap-2 bg-gray-400 p-3 rounded-sm hover:bg-secondary hover:text-white transition-all"
            )
          }
        >
          <LayoutDashboardIcon />
          <span className="font-semibold">Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/supplies"
          className={() =>
            cn(
              "flex gap-2 items-center bg-gray-400 p-3 rounded-sm hover:bg-secondary hover:text-white transition-all"
            )
          }
        >
          <ServerIcon className="text-xl" />
          <span className="font-semibold">Supply Posts</span>
        </NavLink>

        <NavLink
          to="/dashboard/create-supply"
          className={() =>
            cn(
              "flex gap-2 items-center bg-gray-400 p-3 rounded-sm hover:bg-secondary hover:text-white transition-all"
            )
          }
        >
          <ServerIcon className="text-xl" />
          <span className="font-semibold">Create Supply</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
