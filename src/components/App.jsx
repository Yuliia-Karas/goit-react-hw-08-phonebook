import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
// import contacts from '../static/contacts.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: JSON.parse(localStorage.getItem('contacts'))||[] ,
      filter: '',
    };
  }

  addContact = contact => {
    if (this.state.contacts.find(cont => cont.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  // Запис в LocalStotage
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
      </div>
    );
  }
}

export default App;
