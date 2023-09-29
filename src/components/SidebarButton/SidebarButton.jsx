import PropTypes from "prop-types";

import './SidebarButton.scss'

function SidebarButton({ logo }) {
	return (
		<button className="sidebar-button">
			<img src={logo} alt="logo" className="sidebar-button-logo" />
		</button>
	)
}

SidebarButton.propTypes = {
  logo: PropTypes.string.isRequired, // Validation PropTypes pour logo en tant que chaîne de caractères (string)
};

export default SidebarButton