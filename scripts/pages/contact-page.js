// Helpers
import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";

// Services
import { logout } from "../services/session-service.js";

// Pages
import HomePage from "./home-page.js";
import LoginPage from "./login-page.js";
import EditContatPage from "./edit-contact-page.js";
import { deleteContact } from "../services/contacts-service.js";

// Draws page
function render() {
  const contact = STORE.contacts.find((element) => element.id == STORE.currentContactId);
  
  return `
    <section style="position: relative">
      <div class="header">
        <h1>Contact Detail</h1>
        <a class="logout-link">Logout</a>
      </div>
      <div class="container contact-detail">
        <img src="/img/Profile.svg" class="show-contact"/>
        <span class="contact-name">${contact.name}</span>
        <span class="contact-data">${contact.relation}</span>
        <div class="contact-container">
        <div class="contact-data">
          <span class="contact-attr">Number: </span>
          <span class="contact-value">${contact.number}</span>
        </div>
        <div class="contact-data">
          <span class="contact-attr">Email: </span>
          <span class="contact-value">${contact.email}</span>
        </div>
        </div>
        <div class="footer-links">
          <a class="to-home">Back</a>
          <a class="to-delete">Delete</a>
          <a class="to-edit">Edit</a>
        </div>
      </div>
    </section>
  `
}

// Creates functions for page listeners

function listenLogout() {
  
  const logoutButton = document.querySelector(".logout-link")

  logoutButton.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
      await logout();
      DOMHandler.load(LoginPage)
    } catch (error) {
      console.log(error)
    }
  });
}

function listenToEditContact() {
  try {
    const toAddEditLink = document.querySelector(".to-edit")

    toAddEditLink.addEventListener("click", () => {
      DOMHandler.load(EditContatPage)
    })
  } catch (error) {
    console.log(error.message)
  }
}

function listenGoBack() {
  try {
    const toHomeLink = document.querySelector(".to-home");

    toHomeLink.addEventListener("click", () => {
      DOMHandler.load(HomePage);
    })
  } catch (error) {
    console.log(error.message)
  }
}

function listenDelete() {
  const id = STORE.currentContactId;
  const toDeleteContact = document.querySelector(".to-delete");

  toDeleteContact.addEventListener("click", async (event) => {
    event.preventDefault();
    await deleteContact(id);
    await STORE.fetchContacts();
    DOMHandler.load(HomePage);
  })
}
// Creates object to export

const ContactPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenLogout();
    listenToEditContact();
    listenGoBack();
    listenDelete();
  }
}

export default ContactPage