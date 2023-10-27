import React, { useState, useEffect } from 'react';

import TextWithTitle from '../../../common/TextWithTitle'
import NumberedDots from '../../../common/NumberedDots'

const TextPlusDots_1 = (props) => {
    return (
        <>
            <TextWithTitle 
                title={props.headerTextTitle} 
                text={props.headerText}
            />
            <NumberedDots 
                list={props.list}
            />
        </>
    );
}

export default TextPlusDots_1;