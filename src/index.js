import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import pages from './pages';
import PrivateRoute from 'app-components/PrivateRoute';

import Sidebar from 'app-components/Sidebar';

ReactDOM.render((
    <Router>
        <div>
            <Sidebar scenes={pages} />
            <Switch>
                {
                    pages.map(p => {
                        return p.isPrivate ?
                            (<PrivateRoute
                                path={p.path}
                                component={p.component}
                                key={p.path}
                            />) :
                            (<Route
                                path={p.path}
                                component={p.component}
                                key={p.path}
                            />);
                    })
                }
            </Switch>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
