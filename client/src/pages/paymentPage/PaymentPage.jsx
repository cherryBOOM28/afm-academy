import React from 'react';
import cl from './PaymentPage.module.css';
import qrImg from '../../assets/images/qr.svg';
import instructionsImg from '../../assets/images/instractions.svg'
import whatsappIcon from '../../assets/icons/ic_outline-whatsapp.svg';

function PaymentPage(props) {
    return (
        <div className={cl.wrapper}>
            <div className={cl.qr_wrapper}>
                <div className={cl.headline}>
                    <p className={cl.headline_text}>Халықаралык экономика және қаржы академиясы қызмет ақысын қалай төлейді</p>
                    <div className={cl.line}></div>
                    <p className={cl.headline_text}>Как оплатить услугу в Международная академия экономики и финансов</p>
                </div>
                <div className={cl.qr}>
                    <p className={cl.price}>
                        Цена
                        <span>
                            25000тг
                        </span>
                    </p>
                    <img src={qrImg} alt="QR" />
                    <p className={cl.qr_text}>Отсканируйте QR-код в мобильном  приложении банка Kaspi.kz</p>
                </div>
            </div>
                
            <div className={cl.gray_wrapper}>
                <div className={cl.individual}>
                    <div className={cl.headline_block}>
                        <div className={cl.circle}></div>
                        <p className={cl.headline_block_text}>Если вы являетесь физическим лицом</p>
                    </div>
                    <img src={instructionsImg} alt="Инструкция" className={cl.instructions_img} />
                    <div className={cl.whatsapp}>
                        <img src={whatsappIcon} alt="whatsappIcon" />
                        <p className={cl.whatsapp_text}>Отправьте чек об оплате через приложение WhatsApp по номеру +7 701 777 77 77</p>
                    </div>
                </div>
                <div className={cl.legal_entity}>
                    <div className={cl.headline_block}>
                        <div className={cl.circle}></div>
                        <p className={cl.headline_block_text}>Если вы являетесь юридическим лицом</p>
                    </div>
                    <p className={cl.payment_text}>Произведите оплату по счету</p>
                    <div>
                        <p className={cl.payment}>
                        АО «Международная академия экономики и финансов» г. 
                        <br></br>Астана, ул. Ш. Уалиханова, 11 
                        <br></br>БИН 190 840 027 374 
                        <br></br>ИИК KZ7396503F0009487605 
                        <br></br>в АО «ForteBank» 
                        <br></br>БИК : IRTYKZKA 
                        <br></br>Президент АО «МАЭФ» Мерзадинов Е.С.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default PaymentPage;