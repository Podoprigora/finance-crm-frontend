import React, { memo, useCallback } from 'react';
import { Card, Typography } from 'antd';

import AuthService from '../../services/AuthService';
import LoginForm from './LoginForm';

const LoginPage = () => {
    const handleAsyncFormSubmit = useCallback(async (values) => {
        const response = await AuthService.login(values, false);

        if (response.fieldsError) {
            return response.fieldsError;
        }

        return undefined;
    }, []);

    return (
        <div className="login-page">
            <Card className="login-page__card">
                <LoginForm onAsyncSubmit={handleAsyncFormSubmit} />
            </Card>
        </div>
    );
};

export default memo(LoginPage);
