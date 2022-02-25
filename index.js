import { login } from "./scripts/services/session-service.js";

const credentials = {
  email: "davis@mail.com",
  password: "123456"
}

async function test() {
  try {
    const user = await login(credentials);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

test();