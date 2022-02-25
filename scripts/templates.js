import {CONTACT_LIST} from './store.js'

const home= `
  <section>
    <div class="box header">
      <span>Contactable</span>
      <a href="" class="link">Logout</a>
    </div>
    <div class="box home">CONTACTS (10)</div>
    <div class="headline"></div>

    <div class="js-contacts"></div>

    <div class="box flex-end sticky">
      <div class="add_contact">
        <img src="/img/Union.svg" class="plus" />
      </div>
    </div>
  </section>
`

let contacts_template = ``;
let id_count = 0;

for (let element of CONTACT_LIST){
  
  contacts_template +=`
  <div class="box contact_row" id="${id_count}">
    <div class="contact">
      <img src="/img/Profile.svg" />
      <span>${element.name}</span>
    </div>
    <div class="star">
    <img src="/img/Star.svg" class="favorite" />
    </div>
  </div>
  `
  id_count++;
}

export {home, contacts_template, id_count}