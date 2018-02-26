import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import pages from './pages';

ReactDOM.render((
    <Router>
        <Switch>
            {
                pages.map(p => (
                    <Route 
                        path={p.path} 
                        component={p.component}
                        key={p.path}
                    ></Route>
                ))
            }
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
