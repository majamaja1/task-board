import React from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const Input = ({ title, value, onChange, error }) => {
  return (
    <div className="input-wrapper">
      <label className="Label" htmlFor="title">
        {title}
      </label>
      <input
        className="InputText"
        htmlFor="title"
        type="text"
        value={value}
        onChange={onChange}
        id="text"
        placeholder=""
      />
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
