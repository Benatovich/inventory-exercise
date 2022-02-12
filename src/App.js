import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import DetailPage from './DetailPage';

import './App.css';
import { logout } from './services/fetch-utils';

export default function App() {
  // const [user, setUser] = useState('');
  // decide which way to do this
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function fetch() {
      const user = await getUser();

      if (user) setUser(user);
    }

    fetch();
  }, []);

  // do I need handleLogout or can I just use logout...?
  async function handleLogout() {
    await logout();

    setUser('');
  }

  return (
    <Router>
      <div className="App">
        <header>
          {
            user &&
          <div>
            <NavLink exact activeClassName='active-link' to="/games">Games List</NavLink>
            <NavLink exact activeClassName='active-link' to="/create">Create Entry</NavLink>
            <button onClick={handleLogout}>Logout</button>
          </div>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to="/games" />
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path="/games">
              {
                user
                  ? <ListPage/>
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/create">
              {
                user
                  ? <CreatePage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/games/:id" >
              {
                user
                  ? <DetailPage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}