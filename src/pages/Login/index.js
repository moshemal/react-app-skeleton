import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import userService from 'app-services/user';
import PropTypes from 'prop-types';

class Login extends Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        userService.login('user', 'password').then(() => {
            this.setState({ redirectToReferrer: true });
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer || userService.isLoggedIn()) {
            return <Redirect to={from} />;
        } 

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }

    static propTypes = {
        location: PropTypes.object
    }
}

export default Login;