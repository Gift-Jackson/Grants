import { Outlet, Navigate } from "react-router-dom";
import Header from "./UI/Header";
import { AuthService } from "../../Context/AuthProvider";
import { useContext } from "react";

const Layout = () => {
  const { user } = useContext(AuthService);

  return !user ? (
    <Navigate to="/login" replace />
  ) : (
    <>
      <Header />
      <main className="layout my-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
