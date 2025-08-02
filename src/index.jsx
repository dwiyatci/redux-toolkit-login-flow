import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

import App from './app/App';
import store from './app/store';
import './index.css';

const routes = [
  {
    path: '/*',
    element: <App />,
  },
];
const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
