import { Link } from "react-router-dom";
import Brand from "../Global/Brand";
import InputField from "../Global/InputField";
import SelectField from "../Global/SelectField";
import { fetchCountries } from "../../Utils/fetchCountries";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../Lib/appwrite";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

const Register = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getCountries = async () => {
      const countryData = await fetchCountries();
      setCountries(countryData);
    };
    getCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (!formData.firstname) toast.error("Firstname is required");
    else if (!formData.lastname) toast.error("Lastname is required");
    else if (!formData.email) toast.error("Email is required");
    else if (!formData.country) toast.error("Select your country!");
    else if (!formData.password) toast.error("Password is required");
    else if (formData.password.length < 8)
      toast.error("Password should be at least 8 characters");
    else {

      try {
        const response = await account.create(
          uuid(),
          formData.email,
          formData.password,
          `${formData.firstname} ${formData.lastname}`
        );
        console.log(response);
        toast.success("Accounted created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      } catch (error) {
        console.error("Error during signup:", error);
        toast.error(error.message);
      }
      finally {
        setLoading(false)
      }
    }
  }
  

  return (
    <>
      <header className="border-b py-3 md:px-8 px-4 ">
        <Brand />
      </header>
      <div className="w-[90%] md:w-[480px] mx-auto my-8 md:mt-8 md:shadow-lg md:p-4 rounded md:border">
        <div className="pt-4">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Register</h1>
            <p className="text-sm font-medium text-subtext">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-primary underline"
              >
                Login
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <div className="flex gap-2 flex-col md:flex-row">
              <InputField
                label="Firstname"
                type="text"
                name="firstname"
                placeholder="Enter your firstname..."
                id="firstname"
                onChange={handleChange}
                value={formData.firstname}
              />
              <InputField
                label="Lastname"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your lastname..."
                onChange={handleChange}
                value={formData.lastname}
              />
            </div>
            <InputField
              label="E-mail Address"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your e-mail address..."
              onChange={handleChange}
              value={formData.email}
            />
            <SelectField
              id="countries"
              options={countries}
              label="Select Countries"
              name="country"
              onChange={handleChange}
              value={formData.country}
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
            <button
              type="submit"
              className="h-[45px] w-full bg-primary rounded text-white font-bold hover:brightness-90 active:scale-90 "
            >
              {loading?  "Processing...": "Register"}

            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
