import React from 'react';
import './Style.scss';

const SecondPage = () => {
  return (
    <div className="second-page">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  1
                </div>
              </div>
              <div className="card-body">
                <p>Добро пожаловать в симулятор компании, только начинающей осуществлять деятельность в сфере ПОД/ФТ!</p>
                <p>Небольшое описание вашей компании.</p>
                <p>Ваша компания пока не имеет настроенной деятельности и не совершает операции. Ваша главная задача - внедрить внутреннюю политику в сфере ПОД/ФТ.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  2
                </div>
              </div>
              <div className="card-body">
                <p>Подать уведомление:</p>
                <p>Заполните и подайте уведомление о начале деятельности в качестве субъекта финансового мониторинга.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  3
                </div>
              </div>
              <div className="card-body">
                <p>Определение ответственного лица по ПОД/ФТ:</p>
                <p>Проведите собеседование и назначьте ответственного сотрудника, который будет отвечать за соблюдение требований ПОД/ФТ.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  4
                </div>
              </div>
              <div className="card-body">
                <p>Зарегистрируйтесь в личном кабинете:</p>
                <p>Зарегистрируйте компанию в специализированном личном кабинете для субъектов финансового мониторинга.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  5
                </div>
              </div>
              <div className="card-body">
                <p>Разработайте и внедрите ПВК:</p>
                <p>Создайте и внедрите политику внутреннего контроля (ПВК) с учетом требований ПОД/ФТ.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  6
                </div>
              </div>
              <div className="card-body">
                <p>Организуйте систему хранения и обработки информации о клиентах и безопасности.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  7
                </div>
              </div>
              <div className="card-body">
                <p>Досье клиента:</p>
                <p>Создайте шаблон досье на каждого клиента с учетом требований ПОД/ФТ.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <p>Проходите уровни, выполняйте задания и развивайте свою компанию в сфере ПОД/ФТ, обеспечивая соблюдение законодательства и минимизацию рисков!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary">Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;