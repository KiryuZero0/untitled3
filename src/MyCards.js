
import React from 'react';
import { Card } from 'antd';

const MyCards = ({ cards }) => {
    return (
        <div>
            <h1>My Cards</h1>
            {cards.map((card, index) => (
                <Card key={index} title={`Card ${index + 1}`}>
                    <p>Nume: {card.name}</p>
                    <p>Număr Card: {card.cardNumber}</p>
                    <p>Data Expirării: {card.expiryDate}</p>
                    <p>CVC: {card.cvc}</p>
                </Card>
            ))}
        </div>
    );
};

export default MyCards;
