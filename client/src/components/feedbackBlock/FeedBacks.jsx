import React, { useState, useEffect } from 'react';

import './FeedBacks.scss'

import activeDot from './../../assets/icons/yellow-dot.png';
import nonactiveDot from './../../assets/icons/grey-dot.png';

function FeedBacks({ feedBacks }) {

    const [showFeedBacks, setShowFeedbacks] = useState([
        { 
            img: '',
            name: '', 
            text: ''
        }
    ]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        let _maxPage = Math.ceil(feedBacks.length / 3);
        setMaxPage(_maxPage);

        console.log(maxPage, page)

        let _showFeedBacks = [feedBacks[page * 3 - 3], feedBacks[page * 3 - 2], feedBacks[page * 3 - 1]]

        setShowFeedbacks(_showFeedBacks);
    }, [])

    useEffect(() => {
        let _showFeedBacks = [feedBacks[page * 3 - 3], feedBacks[page * 3 - 2], feedBacks[page * 3 - 1]]

        setShowFeedbacks(_showFeedBacks);
    }, [page])

    return ( 
        <>
        <div className='feedBacks-block'>
            {showFeedBacks.map(feedBack => {
                if (!feedBack) return null;

                console.log(showFeedBacks)

                return (
                    <div className='feedBack-card'>
                        <div>
                            <img src={feedBack.img ? feedBack.img : ""} alt={feedBack.name} />
                            <div>{feedBack.name}</div>
                        </div>
                        <p>{feedBack.text}</p>
                    </div>
                )
            })}
        </div>
        <div className='page-buttons'>
            {
                [...Array(maxPage)].map((e, i) => (
                    <img src={i+1 === page ? activeDot : nonactiveDot} alt={i+1} onClick={() => setPage(i+1)}/>
                ))
            }
        </div>
        </>
    );
}

export default FeedBacks;