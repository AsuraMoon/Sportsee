import PropTypes from 'prop-types'; // Importez PropTypes


function UserButton({ userID, onClick }) {
  return (
    <button onClick={() => onClick(userID)}>
      Utilisateur {userID}
    </button>
  );
}

UserButton.propTypes = {
  userID: PropTypes.number.isRequired, // Validation PropTypes pour userID en tant que nombre
  onClick: PropTypes.func.isRequired, // Validation PropTypes pour onClick en tant que fonction
};

export default UserButton;
