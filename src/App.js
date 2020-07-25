import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Exercises from './components/Exercises';
import Users from './components/Users';
// import TodoInput from './components/TodoInput'
// import TodoList from './components/TodoList'

function App() {
  return (
    <Router>
      <ul className="nav-items">
        <li className="nav-item"><Link to="/">Users</Link></li>
        <li className="nav-item"><Link to="/exercises">exercises</Link></li>
      </ul>
      <Switch>
        <Route path="/exercises">
          <Exercises />
        </Route>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </Router>

    // <div>
    //   <TodoInput />
    //   <TodoList />
    // </div>
  );
}

export default App;
