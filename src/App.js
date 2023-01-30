import { useState } from 'react';
import { useGetAllContactsQuery } from 'redux/PhonebookSlice';
import ContactList from './components/ContactList';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';
import './App.css';


function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts } = useGetAllContactsQuery();

  const getFilterQuery = (query) => {
    setFilter(query);
  }

  const getVisibleContacts = () => {
    const nomalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter),
    );
  };

  if (!contacts) {
    return;
  }

  const visibleContacts = getVisibleContacts();

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter onFilterChange={getFilterQuery} value={filter} />
      <ContactList visibleContacts={visibleContacts} filterQuery={filter} />
    </div>
  );
}

export default App;
