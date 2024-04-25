import React from 'react';
import { Layout, Menu, Breadcrumb, Tabs } from 'antd';
import CreareCard from './CreareCard';
import MyCards from './MyCards';
import LoginSignUp from './LoginSignUp'; // Importăm componenta LoginSignUp

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const App = () => {
    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">BANCA REACT</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Creare Card" key="1">
                            <CreareCard />
                        </TabPane>
                        <TabPane tab="My Cards" key="2">
                            <MyCards />
                        </TabPane>
                        <TabPane tab="Login or Sign Up" key="3"> {/* Schimbăm tabul "About" cu "Login or Sign Up" */}
                            <LoginSignUp />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default App;
