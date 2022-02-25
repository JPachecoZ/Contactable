import { login, signup } from "./scripts/services/session-service.js";

const credentials = {
  email: "steve@mail.com",
  password: "123456"
}

async function test() {
  try {
    const myUser = await signup(credentials);
    console.log(myUser);
  } catch (error) {
    console.log(error.message);
  }
}

test();