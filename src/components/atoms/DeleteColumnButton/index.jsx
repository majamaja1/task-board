import React from "react";
import "./DeleteColumn.css";
import PropTypes from "prop-types";

const DeleteColumnButton = ({ onClick }) => {
  return (
    <button className="delete-column-button" onClick={onClick}>
      x
    </button>
  );
};

export default DeleteColumnButton;

DeleteColumnButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
