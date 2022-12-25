import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const useLocalStorage = (contacts, defaultValue) => {
  const [localState, setLocalState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(contacts)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(contacts, JSON.stringify(localState));
  }, [contacts, localState]);

  return [localState, setLocalState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('defaultValue', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addNewContact = ({ name, number }) => { 
    const searchName = name.toLowerCase().trim();
    const searchContact = contacts.find(
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

    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  
  const onChangeFilter = e => {
    setFilter(e.target.value.toLowerCase());
  };
  
  const getFilteredContacts = () => {
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter)
    )
  };
  
  // localStorage.clear();
  
  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        addNewContact={addNewContact}
        />
      <h2>Contacts</h2>
      <Filter
        onChange={onChangeFilter}
        value={filter}
      />
      <ContactList
        filteredContacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};






