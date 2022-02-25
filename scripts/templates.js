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
  <div class="box contact_row" id="c${id_count}">
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

const login = `
  <section>
    <div class="box">Login</div>
    <div class="headline"></div>
    <div class="box">
      <div class="input">
        <div class="inner_input">
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="email"
          />
        </div>
        <div class="headline"></div>
      </div>
    </div>
    <div class="box">
      <div class="input">
        <div class="inner_input">
          <input
            type="text"
            id="password"
            name="password"
            required
            placeholder="password"
          />
        </div>
        <div class="headline"></div>
      </div>
    </div>
    <div class="headline"></div>
    <ul class="link">
    <li><a href="" class="signup">Signup</a></li>
    <li><a href="" class="login">Login</a></li>
    </ul>
  </section>
`
const signup = `
  <section>
    <div class="box">Signup</div>
    <div class="headline"></div>
    <div class="box">
      <div class="input">
        <div class="inner_input">
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="email"
          />
        </div>
        <div class="headline"></div>
      </div>
    </div>
    <div class="box">
      <div class="input">
        <div class="inner_input">
          <input
            type="text"
            id="password"
            name="password"
            required
            placeholder="password"
          />
        </div>
        <div class="headline"></div>
      </div>
    </div>
    <div class="headline"></div>
    <ul class="link">
      <li><a href="">Login</a></li>
      <li><a href="">Create Account</a></li>
    </ul>
  </section>
`
export {home, contacts_template, id_count, login, signup}