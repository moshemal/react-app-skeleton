import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return (
            <ul>
                <li>
                    <NavLink to="/a">a</NavLink>
                </li>
                <li>
                    <NavLink to="/b">b</NavLink>
                </li>
                <li>
                    <NavLink to="/c">c</NavLink>
                </li>
            </ul>
        );
    }
}

export default Sidebar;