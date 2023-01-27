import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
