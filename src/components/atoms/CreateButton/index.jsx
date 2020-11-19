import React from "react";
import "./CreateButton.css";
import PropTypes from "prop-types";

const CreateButton = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Create task
    </button>
  );
};

export default CreateButton;

CreateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
