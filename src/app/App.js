import { Route, Routes, Link } from 'react-router-dom';

import { DummyPage } from '../common/DummyPage';
import { LandingPage } from '../common/LandingPage';
import { NotFoundPage } from '../common/NotFoundPage';
import { AuthGuardedComponent } from '../features/signin/AuthGuardedComponent';
import { LoginPage } from '../features/signin/LoginPage';

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dummy">Dummy</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route element={<AuthGuardedComponent />}>
          {['/', '/index.html'].map((path) => (
            <Route key={path} path={path} element={<LandingPage />} />
          ))}

          {['/dummy', '/wtfk'].map((path) => (
            <Route key={path} path={path} element={<DummyPage />} />
          ))}

          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
