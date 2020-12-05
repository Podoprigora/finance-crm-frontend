import { Button } from 'antd';
import React, { memo } from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <Button type="primary">Primary</Button>
            <Button>Operation</Button>
            <Button>Operation</Button>
        </div>
    );
};

export default memo(Footer);
