import React, { memo } from 'react';
import { Badge, Button, Tooltip } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import useEventCallback from '../../ui/hooks/useEventCallback';

const HeaderMessagesButton = () => {
    const handleClick = useEventCallback((ev) => {
        console.log(`Button "Сообщения" was clicked`);
    });

    return (
        <Tooltip placement="bottom" title="Сообщения">
            <Badge count="5" offset={[-4, 8]}>
                <Button
                    icon={<MessageOutlined />}
                    type="text"
                    shape="circle"
                    size="large"
                    onClick={handleClick}
                />
            </Badge>
        </Tooltip>
    );
};

export default memo(HeaderMessagesButton);
