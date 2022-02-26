// Helpers
import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";

// Services
import { getContacts, toggleFavorite } from "../services/contacts-service.js";
import { logout } from "../services/session-service.js"

// Pages
import LoginPage from "./login-page.js";
import NewContactPage from "./new-contact-page.js";

// Draws page
function renderContact(contact) {
  return `
  <div class="contact-box">
    <div class="profile">
      <img src="/img/Profile.svg"/>
      <span>${contact.name}</span>
    </div>
    <a class="star" data-id="${contact.id}">
      ${contact.favorite ? '<img src="/img/star_fav.svg"/>' : '<img src="/img/star.svg"/>'}
    </a>
  </div>
  `
}

function render() {
  const contactList = STORE.contacts;
  const favoriteList = STORE.favoriteContacts;
  console.log(contactList);
  return `
    <section style="position: relative">
      <div class="header">
        <h1>Contactable</h1>
        <a class="logout-link">Logout</a>
      </div>
      <div class="container contact-list">
        ${(favoriteList.length > 0) ? `<h2 class="sub-title">Favorites (${favoriteList.length})</h2>` : ''}
        <div class="list">
          ${favoriteList.map(renderContact).join("")}
        </div>
        <h2 class="sub-title">Contacts (${contactList.length})</h2>
        <div class="list">
          ${contactList.map(renderContact).join("")}
        </div>
      </div>
      <div class="add-contact to-add-contact"></div>
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

function listenFavorite() {
  const contactList = document.querySelector(".contact-list") // Obtiene la lista de contactos

  contactList.addEventListener("click", async (event) => {
    // Obtiene el id del contacto, en este caso está en el boton estrella de cada contacto
    const starButton = event.target.closest("[data-id]");
    if (!starButton) return;

    event.preventDefault();
    const id = starButton.dataset.id;
    await toggleFavorite(id);
    await STORE.fetchContacts();
    DOMHandler.reload();
  });
}

function listenToAddContact() {
  try {
    const toAddContactLink = document.querySelector(".to-add-contact")

    toAddContactLink.addEventListener("click", () => {
      DOMHandler.load(NewContactPage)
    })
  } catch (error) {
    console.log(error.message)
  }
}

// Creates object to import

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    listenLogout();
    listenFavorite();
    listenToAddContact();
  }
};

export default HomePage
