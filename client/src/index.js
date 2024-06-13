import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CategoryFormatProvider } from './pages/Context/Context.jsx';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CategoryFormatProvider>
            <App />
        </CategoryFormatProvider>
    </React.StrictMode>
);

reportWebVitals();
