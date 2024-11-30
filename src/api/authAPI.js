import { nanoid } from '@reduxjs/toolkit';

import { NETWORK_LATENCY } from '../utils/constants';
import { getUser } from './userAPI';

// eslint-disable-next-line no-unused-vars
export function signin({ username, password }, apiContext = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      if (username === 'glenn' && password === 'koifish') {
        try {
          const token = `${username}:${nanoid()}`;
          const user = await getUser(username, { token });

          return resolve({ token, user });
        } catch (e) {
          return reject(e);
        }
      }

      return reject(
        new Error(
          'Invalid username and password. Please login with (username: glenn, password: koifish). 😌🎏',
        ),
      );
    }, NETWORK_LATENCY);
  });
}

// eslint-disable-next-line no-unused-vars
export function signout(apiContext = {}) {
  return new Promise((resolve) => {
    setTimeout(resolve, NETWORK_LATENCY);
  });
}
