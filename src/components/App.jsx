import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Filter } from './Filter/Filter';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  handleChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };
  
getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const filterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterlowerCase)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={this.addContact } />

       <Filter value={filter} handleChangeFilter={this.handleChangeFilter} />
      
      <ContactList contacts={contacts} />
    </div>
  );
}
}


export default App;
  
