import React, { useState, useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import s from './Add.module.css';
import PropTyps from 'prop-types'

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const addContact = (newContact) => {
    const nameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (nameExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

App.propTyps = {
  contacts: PropTyps.arrayOf(
    PropTyps.shape({
      id: PropTyps.string.isRequired,
      name: PropTyps.string.isRequired,
      number: PropTyps.string.isRequired,
    })
  ),
  filter: PropTyps.string,
  handleDelete: PropTyps.func.isRequired,
  addContact: PropTyps.func.isRequired,
  handleFilterChange: PropTyps.func.isRequired,
  filteredContacts: PropTyps.arrayOf({
    id: PropTyps.string.isRequired,
    name: PropTyps.string.isRequired,
    number: PropTyps.string.isRequired
  }),
  
}

export default App;