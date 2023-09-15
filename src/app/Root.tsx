import React from 'react'
import { BrowserRouter } from "react-router-dom"
// import PerfectScrollbar from 'perfect-scrollbar';

import { App } from './App';


const Root = () => {
    return (
        <BrowserRouter>
             <App />

        </BrowserRouter>
    )
}

export default Root;