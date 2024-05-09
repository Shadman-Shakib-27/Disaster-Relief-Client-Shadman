import { AuthContext } from "@/Provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed text-[#ff3811] mx-auto y-12 rounded-full animate-spin dark:border-violet-400"></div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
