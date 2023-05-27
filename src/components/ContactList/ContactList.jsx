// import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(({ id, name }) => (
            <li key={id}>
                {name}
            </li>
        ))}
    </ul>
);
    
    
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
    

export default ContactList;