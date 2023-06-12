import React, { useState } from "react";
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types'


export const ContactForm = ({onAddContact}) =>  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value)
    }
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
      onAddContact(newContact);
      setName('')
      setNumber('')
    };

    return (
        <form className={s.fomSubmit} onSubmit={handleSubmit}>
            <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
            />
            <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button className={s.btnAddContact} type="submit">Add contact</button>
      </form>
    );
}

ContactForm.propTyps = {
  onAddContact: PropTypes.func.isRequired,
}

export default ContactForm;
