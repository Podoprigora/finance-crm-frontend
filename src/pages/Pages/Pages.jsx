import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppLayout from '../../components/AppLayout';
import LoginPage from '../LoginPage/LoginPage';

const Pages = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route>
                    <AppLayout>Route Content</AppLayout>
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default Pages;
