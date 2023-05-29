import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}:{ contact.number}</li>
        ))}
      </ul>
    );
  }
}



    
    
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
    

export default ContactList;