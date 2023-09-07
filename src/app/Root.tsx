import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"

import configureStore from './store';
import { App } from './App';

// const store = configureStore();

const { PUBLIC_URL } = process.env

const Root = () => {
    return (
        // <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        // </Provider>
    )
}

export default Root;