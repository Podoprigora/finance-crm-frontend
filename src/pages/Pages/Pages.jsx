import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const Pages = () => {
    return (
        <HashRouter>
            <Switch>
                <Route>
                    <LoginPage />
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default Pages;
