import { deleteContact } from '../../redux/contactsSlice';
import s from './ContactIem.module.css'

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact({ id }));
  };

  return (
    <li className={s.lineContact}>
      <p>
        {name}: {number}
      </p>
      <button className={s.btnDelete} onClick={onDelete}>Delete</button>
    </li>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
