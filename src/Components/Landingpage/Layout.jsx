import PropTypes from "prop-types";
import Header from "./UI/Header";
const Layout = ({children}) => {
  return (
      <>
          <Header />
          {children}
      </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Layout