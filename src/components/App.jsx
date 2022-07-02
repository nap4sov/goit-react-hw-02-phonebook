import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Notification from "./Notification";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addContact = contact => {
    if (this.listContainsContact(contact)) {
      return alert(`${contact.name} is already in contacts.`)
    }
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: [contact, ...prevState.contacts]
      }
    }); 
  }
  listContainsContact = contact => {
    return this.state.contacts.some(({ name }) => name.toLowerCase() === contact.name.toLowerCase())
  }
  onFilterChange = data => {
    this.setState(prevState => ({
      ...prevState, 
      filter: data.toLowerCase()
    }))
  }
  handleContactDelete = (event) => {
    const nameToDelete = event.currentTarget.name
    const updatedContacts = [...this.state.contacts].filter(({ name }) => name !== nameToDelete)
    
    this.setState(prevState => ({
      ...prevState,
      contacts: updatedContacts
    }))
  }
  
  render() {
    const { contacts, filter } = this.state
    const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter))
    const contactsListEmpty = contacts.length === 0 && filter === '';

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {!contactsListEmpty && <Filter onChange={this.onFilterChange} value={filter} />}
        {!contactsListEmpty ? <ContactList contacts={filteredContacts} onDeleteClick={this.handleContactDelete} />
          : <Notification title='Contacts list is empty' />}
      </div>
  );
  }
};
