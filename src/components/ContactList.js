import './ContactList.css';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchAll, deleteContact } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filterQuery = useSelector(state => state.phonebook.filter);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch])


  const getVisibleContacts = () => {
    const normalizedFilter = filterQuery.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();


  return (
    <section>
      <ul className="list">
        {visibleContacts.map(({ id, name, phone }) => (
          <li className="contactItem" key={id}>
            <span className="contactName">{name}</span>
            <span>{phone}</span>
            <IconButton
              aria-label="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </section>
  );
}
