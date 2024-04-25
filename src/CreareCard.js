import React from 'react';
import { Button, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import cardStore from './CardStore';

const CreareCard = () => {
    const handleInputChange = (e) => {
        cardStore.handleChange(e);
    };

    const handleGenerate = () => {
        cardStore.handleGenerate();
    };

    const handleSaveCard = () => {
        cardStore.handleSaveCard();
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>Cerere Card</h1>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Nume:
                <Input type="text" name="nume" value={cardStore.formData.nume} onChange={handleInputChange} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Prenume:
                <Input type="text" name="prenume" value={cardStore.formData.prenume} onChange={handleInputChange} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Număr Card:
                <Input type="text" name="cardNumber" value={cardStore.formData.cardNumber} readOnly />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Data Expirării:
                <Input type="text" name="expiryDate" value={cardStore.formData.expiryDate} readOnly />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                CVC:
                <Input type="number" name="cvc" value={cardStore.formData.cvc} onChange={handleInputChange} maxLength={3} />
            </label>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" onClick={handleGenerate} style={{ marginRight: '10px' }}>Generate</Button>
                <Button onClick={handleSaveCard}>Save Card</Button>
            </div>
        </div>
    );
};

export default observer(CreareCard);
