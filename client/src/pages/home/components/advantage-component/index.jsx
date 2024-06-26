import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import advantage1 from './assets/svg/advantage1.svg';
import advantage2 from './assets/svg/advantage2.svg';
import advantage3 from './assets/svg/advantage3.svg';
import advantage4 from './assets/svg/advantage4.svg';
import nextButton from './assets/svg/next-button.svg';
import prevButton from './assets/svg/prev-button.svg';
import './style.css';

const advantages = [
    { icon: advantage1, text: 'Квалифицированные эксперты с опытом работы в сфере ПОД/ФТ' },
    { icon: advantage2, text: 'Удобный формат обучения (онлайн, оффлайн, дистанционный)' },
    { icon: advantage3, text: 'Тесное взаимодействие с Агентством Финансового Мониторинга РК' },
    { icon: advantage4, text: 'Программы, разработанные в соответствии с требованиями законодательства о ПОД/ФТ' },
    { icon: advantage4, text: 'Example fifth advantage' },
];

const NextArrow = ({ onClick }) => {
    return (
        <div className="nav-button next-button" onClick={onClick}>
            <img src={nextButton} alt="next-button" />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="nav-button prev-button" onClick={onClick}>
            <img src={prevButton} alt="prev-button" />
        </div>
    );
};

const AdvantagesCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="advantages-container">
            <p className='advantage-title'>Преимущества</p>
            <p className='aml-academy'>AML Academy</p>

            <Slider {...settings}>
                {advantages.map((item, index) => (
                    <div>
                        <div key={index} className="advantage-item">
                            <div className="icon-circle">
                                <img src={item.icon} alt="icon" className="icon" />
                            </div>
                            <p className='text'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AdvantagesCarousel;
