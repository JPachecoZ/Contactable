import DOMHandler from "../dom-handler.js";
import { updateContact } from "../services/contacts-service.js";
import { logout } from "../services/session-service.js";

import STORE from "../store.js";
import ContactPage from "./contact-page.js";
import LoginPage from "./login-page.js";

function render() {
  const contact = STORE.contacts.find((element) => element.id == STORE.currentContactId);
  return `
    <section style="position: relative">
      <div class="header">
        <h1>Edit Contact</h1>
        <a class="logout-link">Logout</a>
      </div>
      <div class="container">
        <form class="form editContact-form">
          <input type="text" id="name" name="name" required value="${contact.name}" placeholder="Name" />
          <input type="text" id="number" name="number" required value="${contact.number}" placeholder="Number" />
          <input type="text" id="email" name="email" required value="${contact.email}" placeholder="Email" />
          <select id="relation" name="relation" required >
            <option value="${contact.relation}"selected disabled hidden>${contact.relation}</option>
            <option value = "Family">Family</option>
            <option value = "Friends">Friends</option>
            <option value = "Work">Work</option>
            <option value = "Acquaintance">Acquaintance</option>
          </select>
        
          <div class="footer-links">
          <a class="to-contact">Cancel</a>
          <button class="button button--primary">Save</button>
          </div>
        </form>
      </div>
    </section>
  `
}

function listenEditContact(){
  const id = STORE.currentContactId
  const editContactForm = document.querySelector(".editContact-form")

  editContactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, email, number, relation } = event.target;

    const data = {
      name: name.value,
      email: email.value,
      number: number.value,
      relation: relation.value,
    };
    await updateContact(id,data);
    await STORE.fetchContacts();
    DOMHandler.load(ContactPage);

    alert("Se edito contacto " + data.name);
  })
}

function listenCancel() {
  try {
    const toHomeLink = document.querySelector(".to-contact");

    toHomeLink.addEventListener("click", () => {
      DOMHandler.load(ContactPage);
    })
  } catch (error) {
    console.log(error.message)
  }
}

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

const EditContatPage = {
  toString() {
     return render();
  },
  addListeners() {
    listenLogout();
    listenEditContact();
    listenCancel();
  }
}

export default EditContatPage