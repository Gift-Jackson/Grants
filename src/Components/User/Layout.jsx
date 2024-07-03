import { Outlet } from "react-router-dom";
import Header from "./UI/Header";
import AuthProvider from "../../Context/AuthProvider";

const Layout = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <main className="layout my-4">
          <Outlet />
        </main>
      </AuthProvider>
    </>
  );
};

export default Layout;
