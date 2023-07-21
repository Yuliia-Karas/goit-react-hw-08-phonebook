import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from '../components/App.module.css'

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilter,
} from 'redux/selectors';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { setFilter } from 'redux/filterSlice';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const toAddContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
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
      {isLoading && !error && <p>Loading...</p>}
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
