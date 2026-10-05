import { AuthContext } from "@/Provider/AuthProvider";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { Menu, X } from "react-feather";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import Container from "./Container";

const Header = () => {
  // @ts-ignore
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("POST-Access-Token");
        closeMenu();
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => console.error(err));
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      isActive
        ? "bg-primary/10 text-primary"
        : "text-slate-700 hover:bg-slate-100 hover:text-primary"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <Container>
        <nav className="relative grid min-h-20 grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <img className="size-12" src={logo} alt="Disaster Relief Logo" />
            <span className="text-xl font-semibold text-primary">
              <span className="font-bold text-secondary">D</span>isaster Relief
            </span>
          </NavLink>

          <div className="hidden items-center justify-center gap-1 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/supplies" className={navLinkClass}>
              All Supplies
            </NavLink>
          </div>

          <div className="hidden items-center justify-end gap-2 md:flex">
            {user ? (
              <>
                <NavLink to="/dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
                <Button onClick={handleLogout} className="rounded-full px-5">
                  Logout
                </Button>
              </>
            ) : (
              <Button asChild className="rounded-full px-6">
                <NavLink to="/login">Login</NavLink>
              </Button>
            )}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-slate-200 md:hidden"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute left-0 right-0 top-full overflow-hidden border-t border-slate-100 bg-white px-2 pb-4 shadow-lg md:hidden"
              >
                <div className="flex flex-col gap-1 pt-3">
                  <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
                    Home
                  </NavLink>
                  <NavLink
                    to="/supplies"
                    onClick={closeMenu}
                    className={navLinkClass}
                  >
                    All Supplies
                  </NavLink>
                  {user ? (
                    <>
                      <NavLink
                        to="/dashboard"
                        onClick={closeMenu}
                        className={navLinkClass}
                      >
                        Dashboard
                      </NavLink>
                      <Button
                        onClick={handleLogout}
                        className="mt-2 w-full rounded-full"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button asChild className="mt-2 w-full rounded-full">
                      <NavLink to="/login" onClick={closeMenu}>
                        Login
                      </NavLink>
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
