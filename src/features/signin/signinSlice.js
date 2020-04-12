import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser } from '../../api/userAPI';
import { auth } from '../../utils/auth';

export const checkAuth = createAsyncThunk('signin/checkAuth', async () => {
  if (auth.isAuthenticated()) {
    const token = auth.getToken();
    const user = await getCurrentUser({ token });

    return { token, user };
  }

  return {};
});

export const login = createAsyncThunk('signin/login', auth.login);

export const logout = createAsyncThunk('signin/logout', auth.logout);

const initialState = {
  loading: false,
  error: undefined,
  loggedIn: false,
  loggedInUser: undefined,
  token: undefined,
};

export const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
  extraReducers: {
    [checkAuth.pending]: startLoading,
    [checkAuth.fulfilled]: (state, { payload }) => {
      const { token, user } = payload;

      Object.assign(state, {
        loading: false,
        error: undefined,
        loggedIn: !!token,
        loggedInUser: user,
        token,
      });
    },
    [checkAuth.rejected]: receiveError,

    [login.pending]: startLoading,
    [login.fulfilled]: (state, { payload }) => {
      const { token, user } = payload;

      Object.assign(state, {
        loading: false,
        loggedIn: true,
        loggedInUser: user,
        token,
        error: undefined,
      });
    },
    [login.rejected]: receiveError,

    [logout.pending]: startLoading,
    [logout.fulfilled]: (state) => Object.assign(state, initialState),
    [logout.rejected]: receiveError,
  },
});

function startLoading(state) {
  state.loading = true;
}

function receiveError(state, action) {
  Object.assign(state, {
    loading: false,
    error: action.error,
  });
}

export const selectSignin = (state) => state.signin;

export const signinReducer = signinSlice.reducer;
