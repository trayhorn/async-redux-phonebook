import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css';
import { useState } from 'react';


function App() {
  const [filter, setFilter] = useState('');
  const getFilterQuery = (query) => {
    setFilter(query);
  }

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter onFilterChange={getFilterQuery} value={filter} />
      <ContactList filterQuery={filter} />
    </div>
  );
}

export default App;
