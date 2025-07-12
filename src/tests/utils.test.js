import { getContacts, saveContacts } from '../utils/localStorage';

test('should save and get contacts from localStorage', () => {
  const contacts = [{ id: 1, name: 'Alice', email: 'alice@test.com' }];
  saveContacts(contacts);
  const result = getContacts();
  expect(result).toEqual(contacts);
});