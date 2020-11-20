import React from 'react';
import './CreateUserButton.css';
import PropTypes from 'prop-types';

const CreateUserButton = ({ onClick }) => {
  return (
    <button type="submit" className="create-user-button" onClick={onClick}>
      Create user
    </button>
  );
};

export default CreateUserButton;

CreateUserButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
