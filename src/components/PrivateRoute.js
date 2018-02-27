import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import userService from 'app-services/user';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            userService.isLoggedIn() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object
};

export default PrivateRoute;