// Helpers
import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";

// Services
// Pages

// Draws page
function render() {
  return `
    <section style="position: relative">
      <div class="header">
        <h1>Contact Detail</h1>
        <a class="logout-link">Logout</a>
      </div>
      <div class="container">
        <h2>Contenido de contacto con id ${STORE.currentContactId}</h2>
        <br>
        <ul>
          <li>Aqui es solo informativo y las opciones del footer</li>
          <li>Copiarse el footer del login o signup el container se llama footer-links</li>
          <li>Al momento de regresar al home asignar el STORE.currentContactId a nulo </li>
        </ul>
      </div>
    </section>
  `
}

// Creates functions for page listeners

function listenToEditContact() {
  console.log("Se va al page editar contacto")
}

function listenGoBack() {
  console.log("Se vuelve al home")
}

function listenDelete() {
  console.log("Se borra el contacto")
}

// Creates object to export

const ContactPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenToEditContact();
    listenGoBack();
    listenDelete();
  }
}

export default ContactPage