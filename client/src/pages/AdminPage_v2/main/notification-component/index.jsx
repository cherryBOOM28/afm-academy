import React from 'react';
import './style.css'; // Make sure to create and style this file

const Notification = ({ message, onClose }) => {
    return (
        <div className="notification">
            <span>{message}</span>
            <button onClick={onClose}>X</button>
        </div>
    );
};

export default Notification;
