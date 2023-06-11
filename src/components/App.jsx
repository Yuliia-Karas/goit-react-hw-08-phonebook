import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
// import contacts from '../static/contacts.json';

class App extends Component {
  constructor(props) {
    super(props);

const CONTACTS = 'contacts';

    this.state = {
      contacts: JSON.parse(localStorage.getItem(CONTACTS)) || [],
      filter: '',
    };
  }

  // Запис в LocalStotage
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(this.CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (this.state.contacts.find(cont => cont.name === contact.name)) {
      toast.error(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const filterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterlowerCase)
    );
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== idContact),
    }));
  };

  render() {
    const { filter } = this.state;
    const FilterContacts = this.getFilterContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2 className={css['contact-header']}>Contacts</h2>
        <Filter value={filter} handleChangeFilter={this.handleChangeFilter} />
        <ContactList contacts={FilterContacts} onDelete={this.deleteContact} />
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
}

export default App;
