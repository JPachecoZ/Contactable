import { tokenkey } from "../config.js";
import apiFetch from "./api-fetch.js";

export function deleteContact(id) { 
  
  return apiFetch("contacts/" + id, { method: "DELETE"});
}

export async function updateContact(id, data = { name , number, email, realtion, favorite}
){
  const {token, ...user} = await apiFetch("contacts/" + id, {
    body: data, 
    method: "PATCH",
  });
  return user;
}