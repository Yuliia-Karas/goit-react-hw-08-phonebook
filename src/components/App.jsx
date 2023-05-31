import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import contacts from '../static/contacts.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts,
      filter: '',
    };
  }

  addContact = contact => {
    console.log(contact);
    if (this.state.contacts.find(cont => cont.name === contact.name)) { 
      alert(`${contact.name} is already in contacts`);
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

  render() {
    const { filter } = this.state;
    const FilterContacts = this.getFilterContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook 5</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} handleChangeFilter={this.handleChangeFilter} />
        <ContactList contacts={FilterContacts} />
      </div>
    );
  }
}

export default App;
