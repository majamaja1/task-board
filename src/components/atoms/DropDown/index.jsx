import React from 'react';
import './DropDown.css';
import PropTypes from 'prop-types';

const DropDown = ({ title, value, items, onSelect, error }) => {
  return (
    <div className="input-wrapper">
      <label className="Label" htmlFor="title">
        {title}
      </label>
      <select
        value={value.value}
        onChange={(e) => {
          const selectedValue = items.find(
            (item) => item.value.toString() === e.target.value
          );

          onSelect(selectedValue);
        }}
      >
        <option disabled selected value>
          Select...
        </option>
        {items.map((item) => {
          return (
            <option value={item.value} className="dropdown-item">
              {item.name}
            </option>
          );
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default DropDown;

DropDown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  items: PropTypes.instanceOf(Array).isRequired,
  error: PropTypes.string.isRequired,
};

DropDown.defaultProps = {
  value: {},
};
