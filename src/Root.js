import React from 'react';
import StoreProvider from './StoreProvider';
import App from './App';

const Root = () => {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    );
};

export default Root;
