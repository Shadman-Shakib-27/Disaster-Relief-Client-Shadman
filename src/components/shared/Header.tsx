import { NavLink } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/Images/logo.png";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import { Menu } from "react-feather";

const Header = () => {
  //@ts-ignore
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("POST-Access-Token");
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => console.error(err));
  };

  return (
    <div className="lg:shadow-md mb-8 lg:mb-0">
      <Container>
        <nav className="h-20  flex flex-col md:flex-row items-center justify-between ">
          <div className="flex justify-between w-full md:w-auto">
            <NavLink to="/" className="flex justify-center items-center">
              <img className="size-14" src={logo} alt="" />
              <h1 className="text-primary font-medium text-2xl">
                <span className="text-secondary font-semibold">D</span>isaster
                Relief
              </h1>
            </NavLink>
            <Button className="text-lg md:hidden" onClick={handleToggleMenu}>
              <Menu />
            </Button>
          </div>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center space-x-5 ml-4 lg:ml-0 text-lg font-semibold`}
          >
            <NavLink className="ml-5" to="/supplies">
              All Supplies
            </NavLink>
            {user ? (
              <>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <Button onClick={handleLogout} className="text-lg">
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
    </div>
  );
};

export default Header;
