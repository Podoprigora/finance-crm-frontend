import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Layout } from 'antd';

const HEADER_HEIGHT = 56;
const SIDER_WIDTH = 240;
const BREADCRUMB_HEIGHT = 48;

const AppLayout = (props) => {
    const { children } = props;

    return (
        <Layout className="app-layout">
            <Layout.Header className="app-layout__header" style={{ height: HEADER_HEIGHT }}>
                Header
            </Layout.Header>
            <Layout className="app-layout" style={{ marginTop: HEADER_HEIGHT }}>
                <Layout.Sider
                    width={SIDER_WIDTH}
                    className="app-layout__sider app-layout__sider--left"
                >
                    Menu
                </Layout.Sider>
                <Layout className="app-layout" style={{ marginLeft: SIDER_WIDTH }}>
                    <Breadcrumb
                        className="app-layout__breadcrumb"
                        style={{ height: BREADCRUMB_HEIGHT }}
                    >
                        <Breadcrumb.Item>Item 1</Breadcrumb.Item>
                        <Breadcrumb.Item>Item 2</Breadcrumb.Item>
                        <Breadcrumb.Item>item 3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout.Content
                        className="app-layout__content"
                        style={{ marginTop: BREADCRUMB_HEIGHT, marginBottom: HEADER_HEIGHT }}
                    >
                        {children}
                    </Layout.Content>
                </Layout>
            </Layout>
            <Layout.Footer className="app-layout__footer" style={{ height: HEADER_HEIGHT }}>
                Footer
            </Layout.Footer>
        </Layout>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node
};

export default AppLayout;
