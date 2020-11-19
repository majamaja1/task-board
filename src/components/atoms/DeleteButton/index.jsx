import React from "react";
import "./DeleteButton.css";
import PropTypes from "prop-types";

const DeleteButton = ({ onClick }) => {
  return (
    <button className="delete-button" onClick={onClick}>
      Delete
    </button>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
