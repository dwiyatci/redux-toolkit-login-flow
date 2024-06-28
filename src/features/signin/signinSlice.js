import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

import { getCurrentUser } from '../../api/userAPI';
import { auth } from '../../utils/auth';

const initialState = {
  loading: true,
  error: null,
  loggedIn: false,
  loggedInUser: null,
  token: null,
};

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const signinSlice = createAppSlice({
  name: 'signin',
  initialState,
  reducers: (create) => ({
    checkAuth: create.asyncThunk(
      async () => {
        if (auth.isAuthenticated()) {
          const token = auth.getToken();
          const user = await getCurrentUser({ token });

          return { token, user };
        }

        return { token: null, user: null };
      },
      {
        pending: startLoading,
        rejected: receiveError,
        fulfilled: (state, { payload }) => {
          const { token = null, user = null } = payload;

          Object.assign(state, {
            loading: false,
            error: null,
            loggedIn: !!token,
            loggedInUser: user,
            token,
          });
        },
      },
    ),

    login: create.asyncThunk(auth.login, {
      pending: startLoading,
      rejected: receiveError,
      fulfilled: (state, { payload }) => {
        const { token, user } = payload;

        Object.assign(state, {
          loading: false,
          loggedIn: true,
          loggedInUser: user,
          token,
        });
      },
    }),

    logout: create.asyncThunk(auth.logout, {
      pending: startLoading,
      rejected: receiveError,
      fulfilled: (state) =>
        Object.assign(state, {
          ...initialState,
          loading: false,
        }),
    }),
  }),
});

function startLoading(state) {
  Object.assign(state, {
    loading: true,
    error: null,
  });
}

function receiveError(state, action) {
  Object.assign(state, {
    loading: false,
    error: action.error,
  });
}

export const selectSignin = (state) => state.signin;

export const signinReducer = signinSlice.reducer;

export const { checkAuth, login, logout } = signinSlice.actions;

export default signinSlice;
