import { Link } from "react-router-dom";
import globe from "../../../assets/globe.svg";
const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="flex flex-col-reverse md:flex-row min-h-[400px] items-center my-8 md:my-4 md:gap-4 gap-8">
          <div className="flex-1">
            <div className="mb-8 text-center md:text-left">
              <h1 className="font-bold text-4xl xl:text-6xl xl:leading-[60px] mb-2">
                Empowering Growth <br /> Through Grants
              </h1>
              <p className="md:text-sm text-xs leading-4 font-medium">
                At GrantWise, we are dedicated to providing grants that fuel
                innovation, support growth, and empower dreams. Whether you are
                an individual with a vision or a business with a mission, we
                have the resources to help you.
              </p>
            </div>
            <div className="cta flex justify-between md:justify-normal gap-x-2">
              <Link to="/about" className="w-1/2 md:w-[200px] border button py-4 rounded text-sm font-semibold bg-secondary ">
                Learn More
              </Link>
              <Link to="/register" className="w-1/2 md:w-[200px] button bg-primary py-4 rounded text-white">
                <span className="text-sm font-semibold">Apply for Grants</span>
                <span className="material-symbols-outlined md:text-xl text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img src={globe} alt="globe" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
