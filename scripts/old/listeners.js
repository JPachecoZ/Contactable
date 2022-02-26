// import { render } from './handlers.js';
// import { id_count } from './templates.js'


// export function addContactListeners() {
//   for (let i = 0; i < id_count; i++) {
//     const favorite = document.querySelector(`#c${i} .star`);
//     favorite.addEventListener("click", function () {
//       if (this.getAttribute('class') == "star") {
//         this.innerHTML = `
//         <img src="/img/StarB.svg" class="favorite1" />
//         <img src="/img/Starin.svg" class="favorite" />
//         `
//         this.setAttribute('class', "staron");
//       } else {
//         this.innerHTML = `
//         <img src="/img/Star.svg" class="favorite" />
//         `
//         this.setAttribute('class', "star");
//       }
//     })
//   }
// }

// export function addLoginListeners() {
//   const loginLink = document.querySelector(".signup");
//   loginLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     render(signup, "body");
//   })
//   console.log("I'm in the Login function");
// }