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
        <h1>Create new contact</h1>
        <a class="logout-link">Logout</a>
      </div>
      <div class="container">
        <h2>Contenido</h2>
        <br>
        <ul>
          <li>Es parecido al login agregenle un form acá</li>
          <li>Dentro del mismo form agregar el footer que esta en el render de login con los botones cancel y save</li>
          <li>Los listeners para cada boton ya están creados</li>
          <li>El cancel debe llevarte al home de nuevo y el save guardar duh</li>
          <li>El edit es casi igual a esto</li>
        </ul>
      </div>
    </section>
  `
}

// Creates functions for page listeners

function listenAddContact() {
  console.log("Se agrega el contato desde el form")
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
    listenCancel();
  }
}

export default NewContactPage