import React, { memo } from 'react';
import { DollarOutlined, InboxOutlined, TeamOutlined } from '@ant-design/icons';
import { Badge, Col, Menu, Row } from 'antd';

const Navigation = () => {
    return (
        <Menu
            mode="inline"
            defaultOpenKeys={['customers', 'offers', 'mortgages']}
            className="navigation"
        >
            <Menu.SubMenu key="customers" icon={<TeamOutlined />} title="Клиенты">
                <Menu.Item key="customers-all">Все клиенты</Menu.Item>
                <Menu.Item key="customers-available">Свободные клиенты</Menu.Item>
                <Menu.Item key="customers-archive">Архив клиентов</Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="offers" icon={<InboxOutlined />} title="Заявки">
                <Menu.Item key="offers-all">Все заявки</Menu.Item>
                <Menu.Item key="offers-new">
                    <Row justify="space-between" align="middle">
                        <Col>Новые заявки</Col>
                        <Col>
                            <Badge offset={[0, -4]} count="22" />
                        </Col>
                    </Row>
                </Menu.Item>
                <Menu.Item key="offers-archive">Архив заявок</Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="mortgages" icon={<DollarOutlined />} title="Займы">
                <Menu.Item key="mortgages-all">Все займы</Menu.Item>
                <Menu.Item key="mortgages-delay">Займы с просрочкой</Menu.Item>
                <Menu.Item key="mortgages-archive">Архив займов</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
};

export default memo(Navigation);
