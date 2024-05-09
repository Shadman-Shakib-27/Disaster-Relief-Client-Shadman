import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <h1 className="font-semibold text-purple-500 text-6xl">Opps !</h1>
      <p className="text-4xl text-cyan-500 ">Page not found</p>
      <NavLink to="/">
        <Button>Go to Home</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
