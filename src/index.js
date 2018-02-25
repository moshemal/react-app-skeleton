import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './scenes/App';
import Login from './scenes/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={App}></Route>
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
