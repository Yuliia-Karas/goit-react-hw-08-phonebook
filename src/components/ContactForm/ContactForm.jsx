import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    if (name.trim() !== '') {
      const contact = {
        id: nanoid(),
        name: name.trim()
      };
      this.props.addContact(contact);
      this.setState({ name: '' });
    }
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}