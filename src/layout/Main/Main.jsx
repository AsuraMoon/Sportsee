import PropTypes from "prop-types";
import "./Main.scss";

function Main({ children }) {
  return <div className="main">{children}</div>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired, // Validation PropTypes pour children
};

export default Main;
