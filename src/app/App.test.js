import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import App from './App';

test('renders Home link', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
