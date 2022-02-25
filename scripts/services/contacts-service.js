import apiFetch from "./api-fetch.js";

export function createContact(data = { name, email, number, relation }) {
  return apiFetch("contacts", { body: data });
}

export function getContact(id) {
  return apiFetch("contacts/" + id);
}

export function getContacts() {
  return apiFetch("contacts");
}

export async function updateContact(id, data = { name, email, number, relation, favorite }) {
  const { token, ...user } = await apiFetch("contacts/" + id, {
    body: data,
    method: "PATCH",
  });
  return user;
}

export async function toggleFavorite(id) {
  const contact = await apiFetch("contacts/" + id)
  if (!contact.favorite)
    return await updateContact(id, { favorite: true })
  else
    return await updateContact(id, { favorite: false })
}

export function deleteContact(id) {
  return apiFetch("contacts/" + id, { method: "DELETE" });
}