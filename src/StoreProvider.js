import React from 'react';
import { Provider } from 'mobx-react';
import CardStore from './CardStore';

const StoreProvider = ({ children }) => {
    return <Provider cardStore={CardStore}>{children}</Provider>;
};

export default StoreProvider;
