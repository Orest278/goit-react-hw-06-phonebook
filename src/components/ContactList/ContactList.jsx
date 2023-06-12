import React from "react";
import PropTypes from 'prop-types'
import s from './ContactLlist.module.css'

const ContactList = ({ contacts, handleDelete }) => (
  <ul className={s.listContact}>
    {contacts.map((contact) => (
      <ContactListItem key={contact.id} contact={contact} handleDelete={handleDelete} />
    ))}
  </ul>
);

const ContactListItem = ({ contact, handleDelete }) => {
  const handeleDeleteClick = () => {
    handleDelete(contact.id)
  };
  return(
  <li className={s.lineContact}>
    {contact.name} - {contact.number}
    <button className={s.btnDelete} onClick={handeleDeleteClick}>Delete</button>
  </li>
);
}
  

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;