import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageA from '../PageA';
import PageB from '../PageB';
import logo from './logo.svg';
import './App.css';

const DefaultPath = '/b';
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
                <Switch>
                    <Route path="/a" component={PageA}/>
                    <Route path="/b" component={PageB}/>
                    <Redirect to={DefaultPath} />
                </Switch>
            </div>
        );
    }
}

export default App;
