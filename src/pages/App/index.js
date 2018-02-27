import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar';

import scenes from 'app-scenes';

const DefaultScene = scenes.find(s=>s.default) || scenes[0] || {};
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="App-scenes-container">
                    <SideBar scenes={scenes} />
                    <Switch>
                        {
                            scenes.map(p => (
                                <Route
                                    path={p.path}
                                    component={p.component}
                                    key={p.name}
                                ></Route>
                            ))
                        }
                        <Redirect to={DefaultScene.path || ''} />
                    </Switch>
                </div>
            </div>
        );
    }
}



export default App;
