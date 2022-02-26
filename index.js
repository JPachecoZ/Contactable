// Helpers
import DOMHandler from "./scripts/dom-handler.js";
import { tokenkey } from "./scripts/config.js";

// Services
import { createContact, getContact, getContacts, deleteContact, updateContact, toggleFavorite } from "./scripts/services/contacts-service.js";
import { login, signup } from "./scripts/services/session-service.js";

// Other
// import { home, contacts_template, login_template } from './scripts/templates.js'
// import { render } from './scripts/handlers.js'
// import { addContactListeners, addLoginListeners } from './scripts/listeners.js'

// Pages
import LoginPage from "./scripts/pages/login-page.js";

async function init() {
  DOMHandler.load(LoginPage)
  // try {
  //   const token = sessionStorage.getItem(tokenkey);
  //   if (!token) throw new Error();
  // } catch (error) {
  //   sessionStorage.removeItem(tokenkey);
  //   DOMHandler.load(LoginPage)
  // }
}

init();

// const credentials = {
//   email: "steve@mail.com",
//   password: "123456"
// }
// async function test() {
//   try {
//     const myUser = await login(credentials);
//     console.log(myUser);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// test();

// render(login_template, "body")


// if (sessionStorage.contactable_token) {
//   render(home, "body");
//   render(contacts_template, ".js-contacts");
//   addContactListeners();
// } else {
// render(login_template, "body");
// addLoginListeners();
//}

