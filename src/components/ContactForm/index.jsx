import { nanoid } from 'nanoid'
import { Component } from 'react'
import PropTypes from 'prop-types'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInputId = nanoid()

    handleInput = (event) => {
        const {name, value} = event.currentTarget
        this.setState({[name]: value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const contact = {
            id: nanoid(),
            ...this.state,
        }
        this.props.onSubmit(contact)
        this.setState({name: '', number: ''})
    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}> Name
                <input
                    onChange={this.handleInput}
                    value={this.state.name}
                    id={this.nameInputId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label htmlFor={this.nameInputId}> Number
                <input
                    onChange={this.handleInput}
                    value={this.state.number}
                    id={this.nameInputId}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>)
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ContactForm