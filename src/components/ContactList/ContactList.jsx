import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { Button } from '@mui/material';

export default function ContactList(props) {
  const { contacts, onDelete } = props;

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.contacts} key={contact.id}>
          {contact.name}:
          <div className={css['contact-params']}>
            {' '}
            <span> {contact.number}</span>
            <Button
              size="small"
              variant="contained"
              type="submit"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </Button>
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
