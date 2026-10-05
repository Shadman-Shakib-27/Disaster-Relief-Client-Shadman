import logo from "@/assets/Images/logo.png";
import { cn } from "@/lib/utils";
import {
  Home,
  LayoutDashboardIcon,
  PlusCircle,
  ServerIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="border-b border-slate-800 bg-[#12251c] p-4 text-white shadow-xl md:sticky md:left-0 md:top-0 md:h-screen md:border-b-0 md:p-5">
      <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
        <img
          className="size-12 shrink-0"
          src={logo}
          alt="Disaster Relief Logo"
        />
        <div>
          <h2 className="text-xl font-medium text-white">
            <span className="font-semibold text-secondary">D</span>isaster
            Relief
          </h2>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
            Control center
          </p>
        </div>
      </div>
      <p className="mb-3 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
        Workspace
      </p>
      <nav className="grid grid-cols-2 gap-2 md:flex md:flex-col">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all hover:bg-white/10",
              isActive &&
                "bg-secondary text-slate-950 shadow-lg shadow-secondary/20 hover:bg-secondary",
            )
          }
        >
          <Home className="size-4" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all hover:bg-white/10",
              isActive &&
                "bg-secondary text-slate-950 shadow-lg shadow-secondary/20 hover:bg-secondary",
            )
          }
        >
          <LayoutDashboardIcon className="size-4" />
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/dashboard/supplies"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all hover:bg-white/10",
              isActive &&
                "bg-secondary text-slate-950 shadow-lg shadow-secondary/20 hover:bg-secondary",
            )
          }
        >
          <ServerIcon className="size-4" />
          <span>Supply posts</span>
        </NavLink>

        <NavLink
          to="/dashboard/create-supply"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all hover:bg-white/10",
              isActive &&
                "bg-secondary text-slate-950 shadow-lg shadow-secondary/20 hover:bg-secondary",
            )
          }
        >
          <PlusCircle className="size-4" />
          <span>Create supply</span>
        </NavLink>
      </nav>
      <div className="mt-8 hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:block">
        <p className="text-sm font-semibold">Small actions, big impact.</p>
        <p className="mt-2 text-xs leading-5 text-white/50">
          Keep local supply requests moving to the people who need them.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
