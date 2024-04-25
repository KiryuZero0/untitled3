import React, { useState } from 'react';
import { Table } from 'antd';
import { observer } from 'mobx-react-lite';
import cardStore from './CardStore';

const MyCards = () => {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editedCard, setEditedCard] = useState({
        nume: '',
        prenume: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    });

    const columns = [
        {
            title: 'Nume și prenume',
            dataIndex: 'nume',
            key: 'nume',
        },
        {
            title: 'Număr card',
            dataIndex: 'cardNumber',
            key: 'cardNumber',
        },
        {
            title: 'Data expirării',
            dataIndex: 'expiryDate',
            key: 'expiryDate',
        },
        {
            title: 'CVC',
            dataIndex: 'cvc',
            key: 'cvc',
        },
    ];

    return (
        <div style={{ margin: '20px 0' }}>
            <h2 style={{ textAlign: 'center' }}>My Cards</h2>
            <Table dataSource={cardStore.cardsList} columns={columns} />
        </div>
    );
};

export default observer(MyCards);
