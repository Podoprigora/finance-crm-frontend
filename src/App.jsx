import React from 'react';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';

import '../antd-theme/antd-theme-variables.less';
import '../stylesheet/styles.scss';

const App = () => {
    return (
        <ConfigProvider locale={ruRu}>
            <div className="app">Управление клиентами</div>
        </ConfigProvider>
    );
};

export default App;
