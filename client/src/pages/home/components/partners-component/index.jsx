import React from 'react'
import partnerImg from '../../assets/svg/partners.svg'
import PartnersList from './partners-list'
import './style.css'
const partners = [
    {
        img: partnerImg,
        partnerName: 'partner1'
    },
    {
        img: partnerImg,
        partnerName: 'partner2'
    },
    {
        img: partnerImg,
        partnerName: 'partner3'
    },
    {
        img: partnerImg,
        partnerName: 'partner4'
    },
    {
        img: partnerImg,
        partnerName: 'partner5'
    },
    {
        img: partnerImg,
        partnerName: 'partner6'
    }
]

const PartnersComponent = () => {
    return (
        <div className='partners-component'>
            <div className='partners-title'>
                Партнеры
            </div>
            <div className='partners-body'>
                {partners.map((partner, index) => (
                    <PartnersList
                        key={index}
                        img={partner.img}
                        partnerName={partner.partnerName}
                    />
                ))}
            </div>
        </div>
    )
}

export default PartnersComponent
