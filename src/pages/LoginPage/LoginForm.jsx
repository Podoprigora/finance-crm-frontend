import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Checkbox, Button, Alert } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import useMountedRef from '../../ui/hooks/useMountedRef';

const initialValues = {
    username: '',
    password: '',
    remember: true
};

const LoginForm = (props) => {
    const { onAsyncSubmit } = props;

    const [submitting, setSubmitting] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [form] = Form.useForm();
    const isMountedRef = useMountedRef();

    const handleLoginClick = useCallback(async () => {
        try {
            const values = await form.validateFields();

            if (onAsyncSubmit) {
                setSubmitting(true);
                setAlertMessage(null);

                const response = await onAsyncSubmit(values);

                if (!isMountedRef.current) {
                    return;
                }

                setSubmitting(false);

                const { fieldsError, errors } = response;

                if (fieldsError && fieldsError?.length > 0) {
                    fieldsError.forEach((errorItem) => {
                        form.setFields([{ name: errorItem?.field, errors: [errorItem?.error] }]);
                    });
                } else if (errors && errors?.length > 0) {
                    setAlertMessage(errors.join('<br />'));
                }
            }
        } catch (e) {
            Promise.resolve(e);
        }
    }, [form, onAsyncSubmit, isMountedRef]);

    return (
        <Form form={form} name="loginForm" initialValues={initialValues} labelCol={{ span: 8 }}>
            {alertMessage && (
                <Form.Item>
                    <Alert type="error" message={alertMessage} showIcon={false} />
                </Form.Item>
            )}
            <Form.Item
                name="username"
                label="Логин"
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input placeholder="Введите логин" />
            </Form.Item>
            <Form.Item
                name="password"
                label="Пароль"
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input.Password placeholder="Введите пароль" />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 16, offset: 8 }}>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16, offset: 8 }} style={{ marginBottom: 0 }}>
                <Button
                    type="primary"
                    icon={<LoginOutlined />}
                    loading={submitting}
                    onClick={handleLoginClick}
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

LoginForm.propTypes = {
    onAsyncSubmit: PropTypes.func
};

export default memo(LoginForm);
