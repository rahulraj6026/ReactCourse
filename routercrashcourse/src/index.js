import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import User from './User';
import Visit from './Visit';
import NotFound from './NotFound';


const routing = (
      <Router>
      <div>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/visit">Visit</Link></div>
      <div><Link to="/user">User</Link></div>
      <div><Link to="/sample">ample</Link></div>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/visit" component={Visit} />
      <Route path="/user" component={User} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
