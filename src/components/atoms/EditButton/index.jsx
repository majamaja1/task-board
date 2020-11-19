import React from "react";
import "./EditButton.css";
import PropTypes from "prop-types";

const EditButton = ({ onClick }) => {
  return (
    <button className="edit-button" onClick={onClick}>
      Edit
    </button>
  );
};

export default EditButton;

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
