import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Sidebar extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.scenes.map(p => (
                        <li key={p.name}>
                            <NavLink to={p.path}>{p.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
        );
    }
    static propTypes = {
        scenes: PropTypes.arrayOf(PropTypes.object)
    }
}


export default Sidebar;