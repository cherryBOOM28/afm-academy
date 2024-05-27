import React from 'react';
import './Style.scss';

function MainContent() {
  return (
    <div className='left-side'>
      <div className="main-content">
          <p style={{fontSize:"29px"}}>Уровень 1</p>
          <p style={{fontSize:"26px"}}>Задание 1</p>
          <p>Ваша компания только начинает свою деятельность в сфере ПОД/ФТ, и вам необходимо подать 5 направлений уведомления. Согласно законодательству, ваша деятельность подлежит уведомлению соответствующему органу.</p>
          <p>Ваша задача - заполнить форму уведомления, предоставленную в игре, и отправить её для получения документа, подтверждающего направление уведомления. Форма включает основные сведения о вашей компании, её виде деятельности в сфере ПОД/ФТ, контактные данные и др.</p>
          <p>После успешного заполнения и отправки формы, вы получите документ, подтверждающий направление уведомления соответствующему органу. Этот документ будет подтверждением того, что ваша компания начала осуществлять свою деятельность в сфере ПОД/ФТ в соответствии с законодательством.</p>
          <button>Методология</button>
          <p>П.3 ст.3 Закона о ПОД/ФТ: Субъекты финансового мониторинга (юридические консультанты и другие независимые специалисты по юридическим вопросам; ИП и ЮЛ, осуществляющие лизинговую деятельность в качестве лизингодателя без лицензии; ИП и ЮЛ, осуществляющие операции с драгоценными металлами и драгоценными камнями, ювелирными изделиями из них, и ИП и ЮЛ, оказывающие посреднические услуги при осуществлении сделок купли-продажи недвижимого имущества), обязаны направить уведомление в онлайн или печатном варианте в уполномоченный орган в порядке, установленном Законом Республики Казахстан "О разрешениях и уведомлениях".</p>
    </div>
    </div>
  );
}

export default MainContent;
