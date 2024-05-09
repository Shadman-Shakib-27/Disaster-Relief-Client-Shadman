import { NavLink } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/Images/logo.png";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const hadleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("car-access-token");
      })
      .catch((err) => console.error(err));
  };
  return (
    <Container>
      <nav className="h-20 flex flex-col md:flex-row items-center justify-between ">
        <NavLink to="/" className="flex justify-center items-center">
          <img className="size-14" src={logo} alt="" />
          <h1 className="text-primary font-medium text-2xl">
            <span className="text-secondary font-semibold">D</span>isaster
            Relief
          </h1>
        </NavLink>
        <ul className="space-x-5 ml-4 lg:ml-0 text-lg font-semibold">
          <NavLink to="/supplies">All Supplies</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <Button onClick={hadleLogout} className="text-lg">
                <NavLink to="/">Logout</NavLink>
              </Button>
            </>
          ) : (
            <Button className="text-lg">
              <NavLink to="/login">Login</NavLink>
            </Button>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
