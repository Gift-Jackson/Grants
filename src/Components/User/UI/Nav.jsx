import { NavLink, useNavigate } from "react-router-dom";
import Brand from "../../Global/Brand";
import PropTypes from "prop-types";
import { account } from "../../../Lib/appwrite";
import { useState } from "react";
const navlinks = [
  {
    path: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
  },
  {
    path: "application",
    label: "Application",
    icon: "description",
  },
  {
    path: "profile",
    label: "Profile",
    icon: "account_circle",
  },
  {
    path: "withdraw",
    label: "Withdraw",
    icon: "wallet",
  },
  {
    path: "deposit",
    label: "Deposit",
    icon: "payments",
  },
];

const Nav = ({ toggleNav }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await account.deleteSessions();
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0">
        <div
          onClick={toggleNav}
          className="fixed -z-20 h-screen w-full bg-[rgba(0,0,0,0.5)]"
        ></div>
        <div className="bg-white z-9 w-[60%] md:w-[20%] h-screen ">
          <div className="flex justify-between items-center py-4 px-2 border-b">
            <Brand />
            <div
              onClick={toggleNav}
              className="cursor-pointer flex items-center justify-center h-[40px] w-[40px] bg-secondary "
            >
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>

          <ul className="mt-4 w-[90%] mx-auto flex flex-col">
            {navlinks.map((nav, index) => (
              <li key={index}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive ?
                      "flex items-center gap-x-1 bg-secondary mb-2 p-2 rounded" :
                      "flex items-center gap-x-1 hover:bg-secondary mb-2 p-2 rounded"
                  }
                >
                  <div>
                    <span className="material-symbols-outlined text-primary flex items-center justify-center h-[40px] w-[40px]">
                      {nav.icon}
                    </span>
                  </div>
                  <span className="font-semibold text-sm">{nav.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <center>
            <button
              onClick={handleLogout}
              className="mt-8 w-[90%] mx-auto border py-2 flex items-center justify-center text-red-500 border-red-500 bg-red-200 rounded"
            >
              {loading ? (
                <span className="text-red-500 font-bold text-sm">Logging Out</span>
              ) : (
                <>
                  <span className="material-symbols-outlined text-red-500 font-bold text-sm">
                    logout
                  </span>
                  <span className="text-red-500 font-bold text-sm">Logout</span>
                </>
              )}
            </button>
          </center>
        </div>
      </div>
    </>
  );
};

Nav.propTypes = {
  toggleNav: PropTypes.func,
};

export default Nav;
