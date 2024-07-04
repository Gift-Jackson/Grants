import { Route, Routes } from "react-router-dom";
import Layout from "./Components/User/Layout";
import Dashboard from "./Components/User/Pages/Dashboard";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import { Toaster } from "react-hot-toast";
import Notfound from "./Components/Global/Notfound";
import Home from "./Components/Landingpage/Pages/Home";
import AuthProvider from "./Context/AuthProvider";
import Application from "./Components/User/Pages/Application";

const App = () => {
  return (
    <>
      <Toaster position="top center" />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/application" element={<Application />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
