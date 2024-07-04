import { useContext, useState } from "react";
import Brand from "../../Global/Brand";
import Nav from "./Nav";
import { AuthService } from "../../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthService);
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(prev => !prev);
  };
  const navigate = useNavigate()

  if (!user) {
    navigate("/login")
  }

  const initials = user.name.split(' ').map(name => name[0]).join('');

  return (
    <>
      <header className="border-b">
        <nav className="main flex justify-between items-center py-4">
          <Brand />
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              <p className="text-sm font-medium hidden md:block">{user? (user.name) : "fetching"}</p>
              <div className="h-[40px] w-[40px] flex items-center justify-center bg-primary rounded-full font-bold text-white ">
                {initials}
              </div>
            </div>
            <div onClick={toggleNav} className="bg-secondary flex items-center gap-1 h-[40px] cursor-pointer px-2 rounded">
              <span className="font-semibold text-sm hidden md:block">Menu</span>
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>
        </nav>
      </header>
      {nav && <Nav toggleNav={toggleNav} />}
    </>
  );
};

export default Header;
