import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Brand from "../Global/Brand";
import InputField from "../Global/InputField";
import { account } from "../../Lib/appwrite";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.email) toast.error("Email is required");
    else if (!formData.password) toast.error("Password is required");
    else if (formData.password.length < 8)
      toast.error("Password should be at least 8 characters");
    else {
      try {
        const session = await account.createEmailPasswordSession(
          formData.email,
          formData.password
        );
        console.log(session);
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2500);
      } catch (error) {
        console.error("Login failed:", error);
        toast.error(error.message);
      } finally {
        setLoading(false)
      }
      
    }
  };

  return (
    <>
      <header className="border-b py-3 md:px-8 px-4 ">
        <Brand />
      </header>
      <div className="w-[90%] md:w-[480px] mx-auto my-8 md:mt-8 md:shadow-lg md:p-4 rounded md:border">
        <div className="pt-4">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="text-sm font-medium text-subtext">
              Create New Account?{" "}
              <Link
                to="/register"
                className="font-semibold text-primary underline"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <InputField
              label="E-mail Address"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your e-mail address..."
              onChange={handleChange}
              value={formData.email}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="min of 6 characters"
              onChange={handleChange}
              value={formData.password}
            />
            <p className="text-sm font-bold text-primary cursor-pointer">
              forgotten password?
            </p>
            <button
              type="submit"
              className="h-[40px] w-full bg-primary rounded text-white font-bold hover:brightness-90 active:scale-90 "
            >
              {loading? "Processing...": "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
