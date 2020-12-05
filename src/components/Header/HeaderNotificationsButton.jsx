import React, { memo } from 'react';
import { Badge, Button, Tooltip } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

import useEventCallback from '../../ui/hooks/useEventCallback';

const HeaderNotificationsButton = () => {
    const handleClick = useEventCallback((ev) => {
        console.log(`Button "Уведомления" was clicked`);
    });

    return (
        <Tooltip placement="bottom" title="Уведомления">
            <Badge count="1" offset={[-4, 8]}>
                <Button
                    icon={<NotificationOutlined />}
                    type="text"
                    shape="circle"
                    size="large"
                    onClick={handleClick}
                />
            </Badge>
        </Tooltip>
    );
};

export default memo(HeaderNotificationsButton);
