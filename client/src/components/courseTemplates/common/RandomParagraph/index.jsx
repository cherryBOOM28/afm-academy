import React from 'react';
import Sizebox from '../Sizebox';
import './style.scss';
import './../../../../styles/parseTextStyles.scss';

import parseText from '../../../../util/ParseTextFromFormatTextarea';

function RandomParapraph({ children, color, fontSize }) {
    const defaultColor = '#3A3939';
    const defaultFontSize = '18px';

    if (typeof children !== 'object' && children.indexOf('\\n') !== -1) {
        return (
            <div className="randomParagraph">
                {children.split('\\n').map((child, index) => {
                    const last = index === children.split('\\n').length - 1;

                    return (
                        <React.Fragment key={index}>
                            <p
                                style={{
                                    color: color || defaultColor,
                                    fontSize: fontSize || defaultFontSize,
                                }}
                            >
                                {parseText(child)}
                            </p>
                            {!last && <Sizebox height={20} />}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }

    if (typeof children === 'string') {
        return (
            <div className="randomParagraph">
                {children.split('\\n').map((child, index) => {
                    const last = index === children.split('\\n').length - 1;

                    return (
                        <React.Fragment key={index}>
                            <p
                                style={{
                                    color: color || defaultColor,
                                    fontSize: fontSize || defaultFontSize,
                                }}
                            >
                                {parseText(child)}
                            </p>
                            {!last && <Sizebox height={20} />}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="randomParagraph">
            <p
                style={{
                    color: color || defaultColor,
                    fontSize: fontSize || defaultFontSize,
                }}
            >
                {children}
            </p>
        </div>
    );
}

export default RandomParapraph;