import './ContactList.css';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../redux/store';
import { useDispatch } from 'react-redux';


export default function ContactList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <>
      <ul className="list">
        {contacts.map(({ id, name, number }) => (
          <li className="contactItem" key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <IconButton
              onClick={() => dispatch(deleteContact(id))}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </>
  );
}
