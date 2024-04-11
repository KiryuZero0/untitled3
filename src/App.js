// App.js
import React, { useState } from 'react';
import { Layout, Breadcrumb, Tabs } from 'antd';
import CreareCard from './CreareCard';
import MyCards from './MyCards';
import About from './About';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const App: React.FC = () => {
    const [myCards, setMyCards] = useState([]);

    const handleCardSave = (newCard) => {
        setMyCards([...myCards, newCard]);
    };

    return (
        <Layout>
            <Header style={{ backgroundColor: '#001529', color: 'white', textAlign: 'center', fontSize: '24px' }}>
                Banca React
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Creare Card" key="1">
                            <CreareCard onCardSave={handleCardSave} />
                        </TabPane>
                        <TabPane tab="My Cards" key="2">
                            <MyCards cards={myCards} />
                        </TabPane>
                        <TabPane tab="About" key="3">
                            <About />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
    );
};

export default App;
