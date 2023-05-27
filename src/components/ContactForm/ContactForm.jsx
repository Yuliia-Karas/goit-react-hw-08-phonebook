    import { Component } from 'react';
    import { nanoid } from 'nanoid';
    import PropTypes from 'prop-types';
    import css from './ContactForm.module.css';

    export default class ContactForm extends Component {
        state = {
            contacts: [],
            name: ''
        };
        // Відповідає за оновлення стану
        handleChange = e => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
        };

        // Викликається під час відправлення форми
        handleSubmit = e => {
            e.preventDefault();
            const { name, contacts } = this.state;
            if (name.trim() === '') {
                return;
            }
            const newContact = {
                id: nanoid(),
                name: name.trim()
            };
        
            this.setState((prevState) => ({
                contacts: [...prevState.contacts, newContact],
                name: ''
            }));
    
        };
        
        render() {
        const { contacts, name } = this.state;

        return (
        <form onSubmit={this.handleSubmit}>
            
            <label htmlFor="name"> Name </label>

            <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                />
                <button type='submit'>Add contact</button>
        </form>
        );
    }
};
    
    
        
    













