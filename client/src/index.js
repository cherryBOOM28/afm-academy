import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoryFormatProvider } from './pages/Context/Context.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CategoryFormatProvider>
            <App />
        </CategoryFormatProvider>
    </React.StrictMode>
);

reportWebVitals();
