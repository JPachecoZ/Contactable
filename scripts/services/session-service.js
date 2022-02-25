import { tokenkey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function login(credentials = { email, password }) {
  const { token, ...user } = await apiFetch("login", { body: credentials });
  sessionStorage.setItem(tokenkey, token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });
  sessionStorage.removeItem(tokenkey);
}

export async function signup(credentials = { email, password }) {
  const { token, ...user } = await apiFetch("signup", { body: credentials });
  sessionStorage.setItem(tokenkey, token);
  return user;
}
