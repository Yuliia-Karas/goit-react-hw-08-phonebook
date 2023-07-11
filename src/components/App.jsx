// import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { getСontacts, getFilter } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getСontacts);
  const { filter } = useSelector(getFilter);

  const toDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const toAddContact = ({  name, number }) => {
     if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));
  };

  const handleChangeFilter = event =>
    dispatch(setFilter(event.currentTarget.value));

  

  const getFilterContacts = () => {
    const filterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterlowerCase)
    );
  };

  const filtredContacts = getFilterContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={toAddContact} />

        <h2 className={css['contact-header']}>Contacts</h2>
        <Filter value={filter} handleChangeFilter={handleChangeFilter} />
        <ContactList contacts={filtredContacts} onDelete={toDeleteContact} />
        <ToastContainer
          className={css.toast}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    );
}
