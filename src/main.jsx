import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tasks from "./Pages/Tasks.jsx";
import Menu from "./components/Menu.jsx";

WebApp.ready();


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} index element={<App/>} />
                <Route path={'/tasks'}  element={<Tasks/>} />
            </Routes>
            <Menu />
        </BrowserRouter>
    </React.StrictMode>,
)
