import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import FullPageLayout from "../layouts/fullpageLayout";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
                 <FullPageLayout>
                    <Component {...props} />
                </FullPageLayout>
    )}
    />
);

const mapStateToProps = state => {
 
    return {  }
};

export default connect(mapStateToProps)(PublicRoute);

