import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageA from '../PageA';
import PageB from '../PageB';
import logo from './logo.svg';
import './App.css';

const DefaultScene = PageB;
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
                    <Route path="/" component={DefaultScene}/>
                </Switch>
            </div>
        );
    }
}

export default App;
