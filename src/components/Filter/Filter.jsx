import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = props =>
{
   return (
    <label>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.filter}
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
