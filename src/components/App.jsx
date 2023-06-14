import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export default function App() {
  const CONTACTS = 'contacts';
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(CONTACTS)) || []
  );
  const [filter, setFilter] = useState('');

  // Запис в LocalStotage
  useEffect(() => {
    if (setContacts !== contacts) {
      localStorage.setItem(CONTACTS, JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = contact => {
    if (
      contacts.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast.error(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const getFilterContacts = () => {
    const filterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterlowerCase)
    );
  };

  const deleteContact = idContact => {
    setContacts(prevState => prevState.filter(cont => cont.id !== idContact));
  };

  const FilterContacts = getFilterContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 className={css['contact-header']}>Contacts</h2>
      <Filter value={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList contacts={FilterContacts} onDelete={deleteContact} />
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
