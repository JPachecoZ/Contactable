import { getContacts } from "./services/contacts-service.js"

async function fetchContacts() {
  const contacts = await getContacts();
  const ordered_contacts = contacts.sort(function(a,b){return a.name.localeCompare(b.name)});
  this.contacts = ordered_contacts;
  this.favoriteContacts = contacts.filter(
    (contact) => contact.favorite
  );
}

const STORE = {
  user: null,
  currentContactId: null,
  contacts: [],
  favoriteContacts: [],
  fetchContacts,
};

export default STORE;