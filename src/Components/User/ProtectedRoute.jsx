import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthService } from "../../Context/AuthProvider";

const ProtectedRoute = () => {
  const { user } = useContext(AuthService);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
