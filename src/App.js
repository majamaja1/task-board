import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewTaskPage from './components/pages/NewTaskPage';
import Board from './components/pages/Board';
import EditTaskPage from './components/pages/EditTaskPage';
import NewColumnPage from './components/pages/NewColumnPage';
import NewUserPage from './components/pages/NewUserPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Board} />
        <Route exact path="/new" component={NewTaskPage} />
        <Route exact path="/edit/:id" component={EditTaskPage} />
        <Route exact path="/new_column" component={NewColumnPage} />
        <Route exact path="/new_user" component={NewUserPage} />
      </Switch>
    </Router>
  );
}

export default App;
