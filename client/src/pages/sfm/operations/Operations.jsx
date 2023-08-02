import React from 'react';
import cl from './Operations.module.css';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';

function Operations() {
    return (
        <div className={cl.OperationsWrapper}>
            <Header />
            <div className={cl.container}>
                <h1 className={cl.headline}>Операции, подлежащие финансовому мониторингу</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Operations;