import { useGetAllContactsQuery } from 'redux/PhonebookSlice';
import './ContactList.css';
import Contact from './Contact';

export default function ContactList({ filterQuery }) {
  const { data: contacts } = useGetAllContactsQuery();

  const getVisibleContacts = () => {
    const nomalizedFilter = filterQuery.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter),
    );
  };

  if (!contacts) {
    return;
  }

  const visibleContacts = getVisibleContacts();

  return (
    <section>
      <ul className="list">
        {visibleContacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </section>
  );
}
