import { getContacts } from "./services/contacts-service.js"

async function fetchContacts() {
  const contacts = await getContacts();
  this.contacts = contacts;
  this.favoriteContacts = contacts.filter(
    (contact) => contact.favorite == true
  );
}

const STORE = {
  user: null,
  contacts: [],
  favoriteContacts: [],
  fetchContacts,
};

export default STORE;