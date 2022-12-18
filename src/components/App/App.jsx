import React, { Component } from "react";
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts),
       });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  addNewContact = ({ name, number }) => { 
    const searchName = name.toLowerCase().trim();
    const searchContact = this.state.contacts.find(
      contact => contact.name.toLowerCase().trim() === searchName
      );
    
    if (searchContact) {
      return alert(`${name} is already in contacts.`);
    };

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };


  onChangeFilter = e => {
    const filter = e.target.value.toLowerCase();
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    let { contacts, filter } = this.state;
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter)
    )
  };

  deleteContact = id => {
    this.setState(prevState => {
      const contacts = prevState.contacts.filter(contact => contact.id !== id);
      return { contacts };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addNewContact={this.addNewContact}
        />
        <h2>Contacts</h2>
        <Filter
          onChange={this.onChangeFilter}
          value={this.state.filter}
        />
        <ContactList
          filteredContacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
  
};
