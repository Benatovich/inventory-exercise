import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function createGame(game){
  const response = await client
    .from('games')
    .insert([game]);

  return checkError(response);
}

export async function getGames() {
  const response = await client
    .from('games')
    .select();

  return checkError(response);
}

export async function getGameById(id) {
  const response = await client
    .from('games')
    .select('*')
    .match({ id })
    .single();

  return checkError(response);
}

export async function updateGame(id, updatedGame) {
  const response = await client
    .from('games')
    .update(updatedGame)
    .match({ id });

  return checkError(response);
}

export async function deleteGame(id) {
  const response = await client
    .from('games')
    .delete()
    .match({ id });

  return checkError(response);
}