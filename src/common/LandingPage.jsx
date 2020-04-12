import React from 'react';
import { useSelector } from 'react-redux';
import { selectSignin } from '../features/signin/signinSlice';

import bender from './bender.png';

export function LandingPage() {
  const { loggedInUser } = useSelector(selectSignin);

  return (
    <div className="page-landing">
      <h1>Landing page</h1>
      <p>Welcome {loggedInUser.firstName}, welcome to the Machine.</p>
      {/*<pre>└[∵┌]└[ ∵ ]┘[┐∵]┘</pre>*/}
      <img src={bender} alt="Kill all humans" width="256" />
    </div>
  );
}
