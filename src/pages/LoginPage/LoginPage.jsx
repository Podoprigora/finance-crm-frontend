import React, { memo, useCallback, useRef, useState } from 'react';
import { Typography } from 'antd';

import AuthService from '../../services/AuthService';
import LoginForm from './LoginForm';
import LinearSpinner from '../../ui/LinearSpinner/LinearSpinner';
import Mask from '../../ui/Mask';
import MaskSpinner from '../../ui/Mask/MaskSpinner';
import useMountedRef from '../../ui/hooks/useMountedRef';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const cardNodeRef = useRef(null);
    const isMounterRef = useMountedRef();

    const handleAsyncFormSubmit = useCallback(
        async (values) => {
            setLoading(true);
            const response = await AuthService.login(values, false);

            if (isMounterRef.current) {
                setLoading(false);
            }

            return response;
        },
        [isMounterRef]
    );

    return (
        <div className="login-page">
            <article className="login-page__card" ref={cardNodeRef}>
                <Mask open={loading} anchorRef={cardNodeRef}>
                    <MaskSpinner position="top" primary>
                        <LinearSpinner />
                    </MaskSpinner>
                </Mask>

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
