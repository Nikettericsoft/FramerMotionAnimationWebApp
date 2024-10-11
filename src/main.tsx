import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ColorConfig} from "./constants";

const variables = {}
Object.keys(ColorConfig).forEach((key: string, index) => {
    const value: string = Object.values(ColorConfig)[index];
    document.body.style.setProperty('--' + key, value);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div style={variables}>
            <App/>
        </div>
    </React.StrictMode>
    ,
)
