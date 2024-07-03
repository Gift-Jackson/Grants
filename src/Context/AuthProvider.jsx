import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { account } from "../Lib/appwrite";

export const AuthService = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await account.get("current");
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    getUser();
  }, []);

  return (
    <AuthService.Provider value={{ user, setUser }}>{children}</AuthService.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
