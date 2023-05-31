import React from "react";
import PropTypes from 'prop-types';


 export const Filter = (props) => {
  return (
    <label>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={props.value}
        onChange={props.handleChangeFilter}
      />
    </label>
  );
};



Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};