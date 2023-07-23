import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { Button, TextField } from '@mui/material';

export default function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() !== '' && number.trim() !== '') {
      const contact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };

      props.addContact(contact);

      setName('');
      setNumber('');
    }
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css['contact-form-container']}>
      <TextField
        id="filled-basic"
        label="Name"
        variant="standard"
        type="text"
        name="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChangeName}
      />
      <TextField
        id="standard-basic"
        label="Number"
        variant="standard"
        type="tel"
        name="number"
        placeholder="Enter phone number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeNumber}
      />
      <Button
        style={{
          marginTop: 20,
                 }}
        variant="contained"
        disableElevation
        type="submit"
      >
        Add Contact
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
