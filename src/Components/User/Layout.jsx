import { Outlet, Navigate } from "react-router-dom";
import Header from "./UI/Header";
import { AuthService } from "../../Context/AuthProvider";
import { useContext } from "react";

const Layout = () => {
  const { user } = useContext(AuthService);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <main className="layout my-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
