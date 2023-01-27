import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteContactMutation } from 'redux/PhonebookSlice';


export default function Contact({ id, name, phone }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className="contactItem">
      <span className="contactName">{name}</span>
      <span>{phone}</span>
      <IconButton
        aria-label="delete"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}