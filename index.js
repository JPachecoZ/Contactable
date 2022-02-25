import {home, contacts_template, login_template} from './scripts/templates.js'
import {render} from './scripts/handlers.js'
import {addContactListeners, addLoginListeners} from './scripts/listeners.js'

import { createContact, getContact, getContacts, deleteContact, updateContact, toggleFavorite } from "./scripts/services/contacts-service.js";
import { login, signup } from "./scripts/services/session-service.js";

if (0 == 2){
  render(home, "body");
  render(contacts_template, ".js-contacts");
  addContactListeners();
} else {
  render(login_template, "body");
  addLoginListeners();
}

//=======

const credentials = {
  email: "steve@mail.com",
  password: "123456"
}

let contactData = {
  name: "Dude",
  email: "hola@react.com",
  number: "123456789",
  relation: "Friends",
}

async function test() {
  try {
    const myUser = await login(credentials);
    //const newContact = await createContact(contactData);
    const contact = await toggleFavorite(570)
    console.log(myUser);
    console.log(contact);
  } catch (error) {
    console.log(error.message);
  }
}

test();

