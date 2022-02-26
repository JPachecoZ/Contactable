// Helpers
import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import { createContact } from "../services/contacts-service.js";

// Services
// Pages

// Draws page
function render() {
  // const { createError } = NewContactPage.state
  // ${createError ? `<p> ${createError}</p>` : ""}
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
      console.log(event);
      console.log(email.value);
      console.log(number.value);
      console.log(relation.value);
      const data = {
        name: name.value,
        email: email.value,
        number: number.value,
        relation: relation.value,
      };
      console.log(data);
      const result = await createContact(data);
      console.log(result);
      alert("Se agrego contacto " + data.name);

    } catch (error) {
      // NewContactPage.state.signupError = error.message;
      DOMHandler.reload();
    }
  })
}

function listenCancel() {
  console.log("Se cancela y se vuelve al home")
}

// Creates object to export

const NewContactPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenAddContact();
    //listenCancel();
  }
}

export default NewContactPage