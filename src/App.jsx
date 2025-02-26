import React from 'react';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';

import '../antd-theme/antd-theme.less';
import '../stylesheet/styles.scss';

import Pages from './pages/Pages';

const App = () => {
    return (
        <ConfigProvider locale={ruRu}>
            <Pages />
        </ConfigProvider>
    );
};

export default App;
