const CONTACT_LIST =[
  {name: "Andrew Clark"},
  {name: "Brian Vaughn"},
  {name: "Dan Abramov"},
  {name: "Dominic Gannaway"},
  {name: "Luna Ruan"},
  {name: "Rachel Nabors"},
  {name: "Rick Hanlon"},
  {name: "Yuzhi Zheng"},
]

let rendered_contacts = ``;

for (let element of CONTACT_LIST){
  rendered_contacts +=`
  <div class="box contact_row">
  <div class="contact">
    <img src="/img/Profile.svg" />
    <span>${element.name}</span>
  </div>
  <img src="/img/Star.svg" class="favorite" />
  </div>
  `
}

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
const contact = `
<div class="box contact_row">
  <div class="contact">
    <img src="/img/Profile.svg" />
    <span>Andrew Clark</span>
  </div>
  <img src="/img/Star.svg" class="favorite" />
</div>
`

function render(layout, destination){
  const main = document.querySelector(destination);
  main.innerHTML = layout;
}

render(home, "body");
render(rendered_contacts, ".js-contacts");
