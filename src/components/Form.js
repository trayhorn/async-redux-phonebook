import { useState } from "react";
import { TextField, Button } from '@mui/material';
import { nanoid } from 'nanoid';
import './Form.css';


export default function Form({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    addContact(contact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        fullWidth
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        sx={{ marginBottom: '20px' }}
        value={name}
        onChange={handleChange}
      />
      <br />
      <TextField
        fullWidth
        name="number"
        id="outlined-basic"
        label="Number"
        variant="outlined"
        size="small"
        value={number}
        onChange={handleChange}
      />
      <br />
      <Button
        fullWidth
        type="submit"
        sx={{ marginTop: '20px' }}
        variant="contained"
      >
        Add contact
      </Button>
    </form>
  );
}