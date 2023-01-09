import { nanoid } from 'nanoid';
import { useState } from 'react';
import {TextField, Button} from '@mui/material';
import './App.css';


function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number
    }
    setContacts(prevState => [...prevState, contact]);
    setName('');
    setNumber('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
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
          name="number"
          id="outlined-basic"
          label="Number"
          variant="outlined"
          size="small"
          value={number}
          onChange={handleChange}
        />
        <br />
        <Button type="submit" sx={{ marginTop: '20px' }} variant="outlined">
          Add contact
        </Button>
      </form>

      {contacts && (
        <>
          <TextField
            autoComplete='off'
            name="name"
            id="outlined-basic"
            label="Filter"
            variant="outlined"
            size="small"
            sx={{ marginTop: '20px' }}
          />
          <ul>
            {contacts.map(({ id, name, number }) => (
              <li key={id}>
                <span>{name}</span>
                <span>{number}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
