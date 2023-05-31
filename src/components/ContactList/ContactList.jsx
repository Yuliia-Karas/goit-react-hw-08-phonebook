import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li className={css.contacts} key={contact.id}>
            {contact.name}:<span> {contact.number}</span>
            <button
              className={css.button}
              type="submit"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
