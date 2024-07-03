import { NavLink, Link } from "react-router-dom";
import Brand from "../../Global/Brand";

const navlinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About Us",
  },
  {
    path: "/services",
    label: "Services",
  },
  {
    path: "/contact",
    label: "Contact Us",
  },
];

const Header = () => {
  return (
    <>
      <header className="border-b">
        <nav className="main flex justify-between items-center py-4">
          <Brand />

          <div className="flex items-center md:gap-8 gap-4">
            <ul className="md:flex items-center gap-8 hidden">
              {navlinks.map((nav, index) => (
                <li key={index}>
                  <NavLink
                    to={nav.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-medium border-b-2 border-primary"
                        : "text-sm font-medium hover:border-b-2 border-primary"
                    }
                  >
                    {nav.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/login"
              className="text-sm hidden md:block md:bg-primary md:p-[1em] md:px-8 rounded font-bold md:text-white text-primary"
            >
              Login
            </Link>
            <div className="bg-secondary md:hidden flex items-center gap-1 h-[40px] cursor-pointer px-2 rounded">
              <span className="font-semibold text-sm">Menu</span>
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
