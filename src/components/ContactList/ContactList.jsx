import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import s from './ContactLlist.module.css'

function ContactList() {
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterWord)
  );

  return (
    <ul className={s.listContact}>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem id={id} key={id} number={number} name={name} />
      ))}
    </ul>
  );
}

export default ContactList;
