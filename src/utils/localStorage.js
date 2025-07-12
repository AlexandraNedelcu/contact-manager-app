export const getContacts = () => {
  const data = localStorage.getItem('contacts');
  return data ? JSON.parse(data) : [];
};

export const saveContacts = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};