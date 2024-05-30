import React, { useState, useEffect } from 'react';

function FolderQuiz({
    desc,
    list,
    title
}) {
    return ( 
        <div className="folder-quiz">
            {
                typeof desc === 'string' ? <p>desc</p> : desc
            }
            { title ? <div className="title">{title}</div> : null }
            
            
        </div>
    );
}

export default FolderQuiz;