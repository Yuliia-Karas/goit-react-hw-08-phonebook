import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name.trim() !== '' && number.trim() !== '') {
      const contact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };

      this.props.addContact(contact);
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className={css['contact-form-container']}
      >
        <label className={css.form}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.form}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button className={css['add-button']} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
