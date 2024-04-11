// CreareCard.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const CreareCard = ({ onCardSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        const cardNumber = generateRandomCardNumber();
        const cvc = generateRandomNumber(3);
        const newCard = { ...formData, cardNumber, cvc };
        onCardSave(newCard);
        setFormData({
            name: '',
            expiryDate: '',
        });
        message.success('Cardul a fost salvat cu succes!');
    };

    const generateRandomNumber = (length) => {
        let result = '';
        const characters = '0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

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

    return (
        <div>
            <h1>Creare Card</h1>
            <Form layout="vertical">
                <Form.Item label="Numele" name="name" rules={[{ required: true, message: 'Introduceți numele!' }]}>
                    <Input name="name" value={formData.name} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Data Expirării" name="expiryDate" rules={[{ required: true, message: 'Introduceți data de expirare!' }]}>
                    <Input name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleSave}>Salvează Card</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreareCard;
