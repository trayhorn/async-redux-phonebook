import { useGetAllContactsQuery } from 'redux/PhonebookSlice';
import './ContactList.css';
import Contact from './Contact';

export default function ContactList() {
  const { data: contacts } = useGetAllContactsQuery();

  return (
    <section>
      <ul className="list">
        {contacts &&
          contacts.map(({ id, name, phone }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              phone={phone}
            />
          ))}
      </ul>
    </section>
  );
}
