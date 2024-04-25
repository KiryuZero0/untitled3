//CerereCard.js
import React, { useState } from 'react';
import { Button, Input, message } from 'antd';

const CerereCard = ({ onSaveCard }) => {
    const [formData, setFormData] = useState({
        nume: '',
        prenume: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if ((name === 'nume' || name === 'prenume') && /\d/.test(value)) {
            alert('Numele și prenumele nu pot conține cifre!');
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleGenerate = () => {
        const cardNumber = generateRandomCardNumber();
        const expiryDate = generateRandomExpiryDate();
        const cvc = generateRandomNumber(3);
        setFormData({ ...formData, cardNumber, expiryDate, cvc });
    };

    const handleSaveCard = () => {
        if (!formData.nume || !formData.prenume || !formData.cardNumber || !formData.expiryDate || !formData.cvc) {
            message.error('Completați toate câmpurile!');
            return;
        }

        onSaveCard(formData);
    };

    const generateRandomNumber = (length) => {
        let result = '';
        const characters = '0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const generateRandomExpiryDate = () => {
        const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const year = String(new Date().getFullYear() + Math.floor(Math.random() * 5));
        return `${month}/${year}`;
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
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>Cerere Card</h1>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Nume:
                <Input type="text" name="nume" value={formData.nume} onChange={handleChange} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Prenume:
                <Input type="text" name="prenume" value={formData.prenume} onChange={handleChange} />
            </label>
            {/* Am eliminat eticheta și intrarea pentru Număr Card */}
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Data Expirării:
                <Input type="text" name="expiryDate" value={formData.expiryDate} readOnly />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                CVC:
                <Input type="number" name="cvc" value={formData.cvc} onChange={handleChange} maxLength={3} />
            </label>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" onClick={handleGenerate} style={{ marginRight: '10px' }}>Generate</Button>
                <Button onClick={handleSaveCard}>Save Card</Button>
            </div>
        </div>
    );
};

export default CerereCard;