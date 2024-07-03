import PropTypes from "prop-types";
const Title = ({ title = "Title" }) => {
  return (
    <>
      <div className="mb-8">
        <h1 className="font-bold text-xl border-l-8 border-primary pl-2">{title}</h1>
      </div>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
