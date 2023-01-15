import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { useSelector } from 'react-redux';


function App() {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.app);

  const changeFilter = e => {
    setFilter(e.target.value);
  }


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
      <Form />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      {visibleContacts && (
        <ContactList contacts={visibleContacts} />
      )}
    </div>
  );
}

export default App;
