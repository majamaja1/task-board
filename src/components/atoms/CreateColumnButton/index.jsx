import React from "react";
import "./CreateColumnButton.css";
import PropTypes from "prop-types";

const CreateColumnButton = ({ onClick }) => {
  return (
    <button className="create-column-button" onClick={onClick}>
      Create column
    </button>
  );
};

export default CreateColumnButton;

CreateColumnButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
