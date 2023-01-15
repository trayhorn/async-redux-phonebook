import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import initialContacts from './initialContacts.json';


function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    setContacts(prevState => [...prevState, contact]);
  }

  const changeFilter = e => {
    setFilter(e.target.value);
  }

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id)
    })
  };

  const getVisibleContacts = () => {
    const nomalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts(); 

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form addContact={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      {visibleContacts && (
        <ContactList deleteContact={deleteContact} contacts={visibleContacts} />
      )}
    </div>
  );
}

export default App;
