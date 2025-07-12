import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { getContacts, saveContacts } from './utils/localStorage';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(getContacts());
  }, []);

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  const handleAdd = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm onAdd={handleAdd} />
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;