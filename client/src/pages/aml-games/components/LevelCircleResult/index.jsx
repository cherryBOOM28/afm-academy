import React, { useEffect, useState } from 'react';
import './style.css';

const LevelSummary = ({ percentage, score, description, recommendations }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = percentage;
        const duration = 1000; // duration of the animation in ms
        const stepTime = Math.abs(Math.floor(duration / end));
        
        const timer = setInterval(() => {
            start += 1;
            setCurrentPercentage(start);
            if (start === end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [percentage]);

    return (
        <div className="level-summary-container">
            <div className="header" style={{ backgroundColor: 'rgba(31, 60, 136, 0.7)' }}>
                Итог уровня
            </div>
            <div className="circle-container">
                <div className="circle">
                    <div className="circle-inner">
                        <div className="circle-percentage">{currentPercentage}%</div>
                    </div>
                </div>
                <svg className="progress-ring" width="120" height="120">
                    <circle
                        className="progress-ring__circle"
                        stroke="#E4E4E4"
                        strokeWidth="10"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    <circle
                        className="progress-ring__circle"
                        stroke="#1F3C88"
                        strokeWidth="10"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        style={{ strokeDasharray: '314', strokeDashoffset: 314 - (314 * currentPercentage) / 100 }}
                    />
                </svg>
            </div>
            <div className="score">Баллы: {score}</div>
            <div className="description">{description}</div>
            <div className="recommendations-title">Рекомендации:</div>
            <div className="recommendations">{recommendations}</div>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent:"center"

            }}>
            <button className="reset-button">
                <span className="icon">⟳</span>
                Начать сначала
            </button>
            </div>
        </div>
    );
};

export default LevelSummary;
