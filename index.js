import { deleteContact, updateContact } from "./scripts/services/contacts-service.js";
import { login, signup } from "./scripts/services/session-service.js";

const credentials = {
  email: "davis@mail.com",
  password: "123456"
}

let data = {
  name: "holaaa",
  number: "111111111",
  email: "hola@react.com",
  relation: "Friends",
  favorite: true
}

async function test() {
  try {
    const myUser = await login(credentials);
    console.log(myUser);
   // deleteContact("545")
   updateContact("547",data)
  } catch (error) {
    console.log(error.message);
  }
}



test();