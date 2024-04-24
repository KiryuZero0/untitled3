// MyCardZone.js
import React from 'react';
import MyCards from './MyCards'; // Importați componenta MyCards

const MyCardZone = ({ myCards }) => {
    return (
        <div style={{ maxWidth: '800px', margin: '20px auto' }}>
            <h1 style={{ textAlign: 'center' }}>My Cards Zone</h1>
            <MyCards myCards={myCards} />
        </div>
    );
};

export default MyCardZone;
