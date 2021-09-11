import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import MainLayout from "../layouts/mainLayout";

// Main Layout
const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <MainLayout>
                <Component {...props} />
            </MainLayout>
        ) : (
                <Redirect to='/login' />
            )
    )}
    />
);

const mapStateToProps = state => {
    const isAuthenticated = state.login.loginFlag;    
    return { isAuthenticated }
};

export default connect(mapStateToProps)(PrivateRoute);