import { combineSlices } from '@reduxjs/toolkit';

import signinSlice from '../features/signin/signinSlice';

const rootReducer = combineSlices(signinSlice);

export default rootReducer;
