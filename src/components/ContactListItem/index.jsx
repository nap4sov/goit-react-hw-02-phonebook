import PropTypes from 'prop-types'

const ContactListItem = ({ name, number, onDeleteClick }) =>
    <li>
        <span>{name}: </span>
        <span>{number}</span>
        <button onClick={onDeleteClick} name={name} type="button">Delete</button>
    </li>
    
ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}

export default ContactListItem