// Helpers
import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";

// Services
import { getContacts } from "../services/contacts-service.js";

// Draws page
function renderContact(contact) {
  return `
  <div class="contact-box">
    <div class="profile">
      <img src="/img/Profile.svg"/>
      <span>${contact.name}</span>
    </div>
    <div class="star">
      <img src="/img/Star.svg" class="favorite" />
    </div>
  </div>
  `
}

function render() {
  const contactList = STORE.contacts;
  console.log(contactList);
  return `
    <section style="position: relative;>
      <div class="header">Contactable</div>
      <div class="container">
        <h2 class="subtitle">Contacts(10)</h2>
        <div class="list contact-list">
          ${contactList.map(renderContact).join("")}
        </div>
      </div>
      <div class="plus-sign add_contact"></div>
    </section>
    
  `
}

// Creates functions for page listeners
function listenLogout() {
  console.log("LOGOUT");
}

// Creates object to import

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    listenLogout();
  }
};

export default HomePage
