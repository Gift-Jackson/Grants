import PropTypes from "prop-types";

const Card = ({ amount, title, icon }) => {
  const f = new Intl.NumberFormat("en-US");
  return (
    <>
      <div className="shadow-lg p-4 border flex flex-col gap-y-4 rounded-md">
        <div className="flex items-center gap-x-2">
          <span className="material-symbols-outlined text-primary">{icon}</span>
          <span >{title}</span>
        </div>

        <h1 className="font-bold text-2xl">${f.format(amount)}.00</h1>
      </div>
    </>
  );
};
Card.propTypes = {
  amount: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Card;
