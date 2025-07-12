export default function ContactItem({ contact, onDelete }) {
  return (
    <li>
      {contact.name} ({contact.email})
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}