// const CURRENT_USER = Symbol('CURRENT_USER');

export function getCurrentUser(apiContext = {}) {
  const username = (apiContext.token || '').split(':')[0];

  return getUser(username, apiContext);
}

export function getUser(username, apiContext = {}) {
  const { token } = apiContext;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        if (username === 'glenn') {
          const user = {
            username: 'glenn',
            firstName: 'Glenn',
            lastName: 'Dwiyatcita',
          };

          return resolve(user);
        }

        return reject(new Error(`Username "${username}" does not exist.`));
      }

      return reject(new Error('Unauthorized User API call: missing auth token.'));
    }, 0);
  });
}
