import React, { memo, useCallback } from 'react';
import { Typography, Spin } from 'antd';

import AuthService from '../../services/AuthService';
import LoginForm from './LoginForm';
import LinearSpinner from '../../ui/LinearSpinner/LinearSpinner';
import CircularSpinner from '../../ui/CircularSpinner/CircularSpinner';

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
            <article className="login-page__card u-position-relative u-overflow-hidden">
                <header className="login-page__card-header">
                    <Typography.Title className="login-page__card-title" level={4}>
                        Войти в систему
                    </Typography.Title>
                </header>
                <div className="login-page__card-body">
                    <LoginForm onAsyncSubmit={handleAsyncFormSubmit} />
                </div>
            </article>
        </div>
    );
};

export default memo(LoginPage);
