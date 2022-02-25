import {home, contacts_template, login} from './scripts/templates.js'
import {render} from './scripts/handlers.js'
import {addContactListeners, addLoginListeners} from './scripts/listeners.js'

if (0 == 2){
  render(home, "body");
  render(contacts_template, ".js-contacts");
  addContactListeners();
} else {
  render(login, "body");
  addLoginListeners();
}
