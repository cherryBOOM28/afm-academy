import React from 'react'
import partnerImg1 from '../../assets/jfif/Afm.jfif'
import partnerImg2 from '../../assets/jfif/Sfm.jfif'
import partnerImg5 from '../../assets/png/sudEkspertiza.png'
import partnerImg3 from '../../assets/png/Turan.png'
import partnerImg4 from '../../assets/png/uchetPob.png'
import PartnersList from './partners-list'
import './style.css'
const partners = [
    {
        img: partnerImg1,
        partnerName: 'Afm'
    },
    {
        img: partnerImg2,
        partnerName: 'Sfm'
    },
    {
        img: partnerImg3,
        partnerName: 'Turan'
    },
    {
        img: partnerImg4,
        partnerName: 'UchetPob'
    },
    {
        img: partnerImg5,
        partnerName: 'SudEkspertiza'
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
