import { Link } from "react-router-dom";
import Card from "../UI/Card";
import Title from "../UI/Title";
import Supports from "../UI/Supports";
import globe from "../../../assets/globe.svg";

const Dashboard = () => {
  const balance = 123400;
  const withdraw = 0;

  return (
    <>
      <div>
        <Title title="Dashboard" />
        <div className="grid">
          <Card icon="wallet" amount={balance} title="Total Balance" />
          <Card icon="credit_score" amount={withdraw} title="Withdrawals" />
        </div>
        <center>
          <Link to="application">
            <button className="w-full md:w-[200px] bg-primary my-4 py-2 text-sm font-bold flex items-center justify-center rounded text-white">
              <span className="material-symbols-outlined">description</span>
              <span>Apply Now</span>
            </button>
          </Link>
        </center>

        <div className="grid">
          <Supports />
          <div className="flex items-center justify-center">
            <img src={globe} alt="globe" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
