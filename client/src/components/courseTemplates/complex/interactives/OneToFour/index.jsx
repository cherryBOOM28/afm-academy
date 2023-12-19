import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';

import './style.scss'
import Sizebox from '../../../common/Sizebox';

function OneToFour({
    header,
    list
}) {
    const [open, setOpen] = useState(false)
    const mainControls = useAnimation();

    useEffect(() => {

        if (open) {
            mainControls.start('visible')
        } else {
            mainControls.start('hidden')
        }

    }, [open])

    return ( 
        <div className="one-to-four">
            <div className="wrapper">
                <div className="oneToFour">
                    <div className="header-wrapper">
                        <div className="header">
                            <div className="text">{header}</div>
                            <div className="open" onClick={() => setOpen(prev => !prev)}>
                                {   
                                    open 
                                        ? <AiOutlineMinus 
                                            size={23}
                                            
                                            />
                                        : <AiOutlinePlus 
                                            size={23}
                                        />
                                }
                            </div>
                        </div>
                    </div>
                    <Sizebox height={51} />
                    <motion.div className="body-wrapper"
                        variants={{
                            hidden: {
                                height: 0,
                                paddingTop: 0,
                                paddingBottom: 0
                            },
                            visible: {
                                height: 'max-content',
                                paddingBottom: '10px'
                            }
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        initial='hidden'
                        animate={mainControls}
                    >
                        <div className="body">
                            {
                                list ? list.map((item, index) => {

                                    return (
                                        <div>{item}</div>
                                    )
                                }) : null
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
            
        </div>
    );
}

export default OneToFour;