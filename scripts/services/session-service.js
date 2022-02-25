import { tokenkey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function login(credentials = { email, password }) {
  const { token, ...user } = await apiFetch("login", { body: credentials });
  sessionStorage.setItem(tokenkey, token);
  
  return user;
}