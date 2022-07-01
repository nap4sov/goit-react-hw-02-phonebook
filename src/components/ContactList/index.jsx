import ContactListItem from "components/ContactListItem"
import Notification from "components/Notification"
import PropTypes from 'prop-types'

const ContactList = ({ contacts, onDeleteClick }) => {
    if (contacts.length === 0) {
        return (<Notification title='No contact with such name found' />)
    }
    
    return (<ul>
        {contacts.map(({ id, name, number }) => 
            <ContactListItem key={id} name={name} number={number} onDeleteClick={onDeleteClick} />
        )}
    </ul>)
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}

export default ContactList

