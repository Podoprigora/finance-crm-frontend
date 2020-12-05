import React, { memo } from 'react';

import { Menu, Avatar, Dropdown } from 'antd';
import { DownOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import useEventCallback from '../../ui/hooks/useEventCallback';

const HeaderUser = () => {
    const handleSettingsClick = useEventCallback((ev) => {
        console.log(`Button "Администрироване" was clicked`);
    });

    const handleLogoutClick = useEventCallback((ev) => {
        console.log(`Button "Выход" was clicked`);
    });

    const menuElement = (
        <Menu>
            <Menu.Item key="0" icon={<SettingOutlined />} onClick={handleSettingsClick}>
                Администрирование
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogoutClick}>
                Выход
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menuElement} trigger={['click']}>
            <button type="button" className="header__user-btn">
                <Avatar className="header__user-btn-avatar" icon={<UserOutlined />} />
                <div className="header__user-btn-info">
                    <span className="header__user-btn-name">Иванов Петр Александрович</span>
                    <span className="header__user-btn-email">aaa@gmail.com</span>
                </div>
                <DownOutlined className="header__user-btn-arrow" />
            </button>
        </Dropdown>
    );
};

export default memo(HeaderUser);
