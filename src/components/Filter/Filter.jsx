import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import css from './Filter.module.css'

export const Filter = props => {
  return (
    <div className={css['contact-form-container']}>
      <TextField
        className={css.textfield}
        id="standard-basic"
        label="Find contacts by name"
        variant="standard"
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={props.value}
        onChange={props.handleChangeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
