import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Layout } from 'antd';

import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';

const haderHeight = 56;
const siderWidth = 240;
const bradcrumbHeight = 48;

const AppLayout = (props) => {
    const { children } = props;

    return (
        <Layout className="app-layout">
            <Layout.Header className="app-layout__header" style={{ height: haderHeight }}>
                <Header />
            </Layout.Header>
            <Layout className="app-layout" style={{ marginTop: haderHeight }}>
                <Layout.Sider
                    width={siderWidth}
                    className="app-layout__sider app-layout__sider--left"
                    collapsed={false}
                >
                    <Navigation />
                </Layout.Sider>
                <Layout className="app-layout" style={{ marginLeft: siderWidth }}>
                    <Breadcrumb
                        className="app-layout__breadcrumb"
                        style={{ height: bradcrumbHeight }}
                    >
                        <Breadcrumb.Item>Item 1</Breadcrumb.Item>
                        <Breadcrumb.Item>Item 2</Breadcrumb.Item>
                        <Breadcrumb.Item>item 3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout.Content
                        className="app-layout__content"
                        style={{ marginTop: bradcrumbHeight, marginBottom: haderHeight }}
                    >
                        {children}
                    </Layout.Content>
                </Layout>
            </Layout>
            <Layout.Footer className="app-layout__footer" style={{ height: haderHeight }}>
                <Footer />
            </Layout.Footer>
        </Layout>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node
};

export default AppLayout;
