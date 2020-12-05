import React, { memo } from 'react';

import HeaderUser from './HeaderUser';
import HeaderNotificationsButton from './HeaderNotificationsButton';
import HeaderMessagesButton from './HeaderMessagesButton';

const Header = () => {
    return (
        <div className="header">
            <h3 className="header__title">Управление клиентами</h3>
            <div className="header__actions">
                <HeaderNotificationsButton />
                <HeaderMessagesButton />
                <HeaderUser />
            </div>
        </div>
    );
};

export default memo(Header);
