import { signin, signout } from '../api/authAPI';

const TOKEN_KEY = '_t4gd-*-';

export const auth = {
  isAuthenticated,
  getToken,
  login,
  logout,
};

function isAuthenticated() {
  return !!getToken();
}

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
}

async function login({ username, password, rememberMe }) {
  const { token, user } = await signin({ username, password });

  if (rememberMe) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  return { token, user };
}

async function logout() {
  await signout();
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_KEY);
}
