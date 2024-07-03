import { Route, Routes } from "react-router-dom";
import Layout from "./Components/User/Layout";
import Dashboard from "./Components/User/Pages/Dashboard";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import { Toaster } from "react-hot-toast";
import Notfound from "./Components/Global/Notfound";
import Home from "./Components/Landingpage/Pages/Home";

const App = () => {
  return (
    <>
      <Toaster position="top center"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </>
  );
};

export default App;
