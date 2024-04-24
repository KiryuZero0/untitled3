import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Tabs, message } from 'antd';
import CreareCard from './CreareCard';
import MyCards from './MyCards';
import About from './About';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const App = () => {
    const [myCards, setMyCards] = useState([]);

    // Definirea funcției onSaveCard care va fi apelată din CerereCard
    const onSaveCard = (formData) => {
        if (!formData.nume || !formData.prenume || !formData.cardNumber || !formData.expiryDate || !formData.cvc) {
            message.error('Completați toate câmpurile!');
            return;
        }

        const cardNumber = generateRandomCardNumber(); // Generarea unui număr de card aleatoriu
        const newCard = { ...formData, cardNumber };
        setMyCards([...myCards, newCard]);
        message.success('Cardul a fost salvat cu succes!');
    };

    // Funcția pentru generarea unui număr de card aleatoriu
    const generateRandomCardNumber = () => {
        let cardNumber = '';
        for (let i = 0; i < 16; i++) {
            cardNumber += generateRandomNumber(1);
            if ((i + 1) % 4 === 0 && i < 15) {
                cardNumber += ' ';
            }
        }
        return cardNumber;
    };

    // Funcția pentru generarea unui număr aleatoriu
    const generateRandomNumber = (length) => {
        let result = '';
        const characters = '0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

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
                            {/* Transmiterea funcției onSaveCard către CerereCard */}
                            <CreareCard onSaveCard={onSaveCard} />
                        </TabPane>
                        <TabPane tab="My Cards" key="2">
                            <MyCards myCards={myCards} />
                        </TabPane>
                        <TabPane tab="About" key="3">
                            <About />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default App;
