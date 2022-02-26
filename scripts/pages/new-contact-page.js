// Helpers
import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";

// Services
import { createContact } from "../services/contacts-service.js";
import { logout } from "../services/session-service.js";

// Pages
import HomePage from "./home-page.js";
import LoginPage from "./login-page.js";

// Draws page
function render() {
  const { createError } = NewContactPage.state
  
  return `
    <section style="position: relative">
      <div class="header">
        <h1>Create new contact</h1>
        <a class="logout-link">Logout</a>
      </div>
      <div class="container">
        <form class="form newcontact-form">
          <input type="text" id="name" name="name" required placeholder="Name" />
          <input type="text" id="number" name="number" required placeholder="Number" />
          <input type="text" id="email" name="email" required placeholder="Email" />
          <select id="relation" name="relation" required >
            <option value="" selected disabled hidden>Relation</option>
            <option value = "Family">Family</option>
            <option value = "Friends">Friends</option>
            <option value = "Work">Work</option>
            <option value = "Acquaintance">Acquaintance</option>
          </select>
          ${createError ? `<p> ${createError}</p>` : ""}
          <div class="footer-links">
          <a class="to-home">Cancel</a>
          <button class="button button--primary">Save</button>
          </div>
        </form>
      </div>
    </section>
  `
}

// Creates functions for page listeners

function listenAddContact() {
  const newContactForm = document.querySelector(".newcontact-form");

  newContactForm.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const { name, email, number, relation } = event.target;
      const data = {
        name: name.value,
        email: email.value,
        number: number.value,
        relation: relation.value,
      };
 
      await createContact(data);
      await STORE.fetchContacts();
      DOMHandler.load(HomePage);

      alert("Se agrego contacto " + data.name);   

    } catch (error) {
      NewContactPage.state.signupError = error.message;
      DOMHandler.reload();
    }
  })
}

function listenCancel() {
  try {
    const toHomeLink = document.querySelector(".to-home");

    toHomeLink.addEventListener("click", () => {
      DOMHandler.load(HomePage);
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

// Creates object to export

const NewContactPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenLogout();
    listenAddContact();
    listenCancel();
  },
  state: {
    loginError: null,
  }
}

export default NewContactPage