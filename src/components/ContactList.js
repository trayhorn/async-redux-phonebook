import './ContactList.css';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactList({ contacts, deleteContact }) {

  return (
    <>
      <ul className="list">
        {contacts.map(({ id, name, number }) => (
          <li className="contactItem" key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <IconButton
              onClick={() => deleteContact(id)}
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
