// Helpers
import DOMHandler from "./scripts/dom-handler.js";
import { tokenkey } from "./scripts/config.js";

// Services
import { createContact, getContact, getContacts, deleteContact, updateContact, toggleFavorite } from "./scripts/services/contacts-service.js";
import { login, signup } from "./scripts/services/session-service.js";

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

