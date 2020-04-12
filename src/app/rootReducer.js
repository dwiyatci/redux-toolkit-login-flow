import { combineReducers } from '@reduxjs/toolkit';

import { signinReducer } from '../features/signin/signinSlice';

const rootReducer = combineReducers({
  signin: signinReducer,
});

export default rootReducer;
