import React from 'react';
import './Style.scss';

function Quiz() {
  return (
    <div className="quiz">
      <h3>Quiz</h3>
      <form>
        <p>Нужно ли вам подавать уведомление?</p>
        <label>
          <input type="radio" name="notify" value="yes" />
          Да
        </label>
        <label>
          <input type="radio" name="notify" value="no" />
          Нет
        </label>
        <p>Выберите систему, через которую будете подавать уведомление</p>
        <label>
          <input type="radio" name="system" value="websfm" />
          WEB SFM
        </label>
        <label>
          <input type="radio" name="system" value="kgd" />
          КГД
        </label>
        <label>
          <input type="radio" name="system" value="egov" />
          EGOV(elicense)
        </label>
      </form>
    </div>
  );
}

export default Quiz;
