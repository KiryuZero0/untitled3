import React from 'react';
import { Table } from 'antd';

const MyCards = ({ myCards }) => {
    const columns = [
        {
            title: 'Nume',
            dataIndex: 'nume',
            key: 'nume',
            render: (text, record) => <span>{record.nume}</span>, // Renderizăm doar numele
        },
        {
            title: 'Prenume',
            dataIndex: 'prenume',
            key: 'prenume',
            render: (text, record) => <span>{record.prenume}</span>, // Renderizăm doar prenumele
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
            <Table dataSource={myCards} columns={columns} />
        </div>
    );
};

export default MyCards;
