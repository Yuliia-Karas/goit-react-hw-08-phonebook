import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList(props) {
  const { contacts, onDelete } = props;

  return (
    <ul>
      {contacts.map(contact => (
        <li className={css.contacts} key={contact.id}>
          {contact.name}:
          <div className={css['contact-params']}>
            {' '}
            <span> {contact.number}</span>
            <button
              className={css.button}
              type="submit"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>{' '}
          </div>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
