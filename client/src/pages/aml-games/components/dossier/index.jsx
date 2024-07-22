import React, { useState } from "react";
import "./style.scss";
import avatar from "./profileImg/profileIcon.png";
import ToggleButton from "./ToggleButton/index";
import { IoCheckmark } from "react-icons/io5";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";

const DossierComponent = () => {
  const [isSubject, setIsSubject] = useState(false);

  const [participantType, setParticipantType] = useState("продавец");
  const [operationType, setOperationType] = useState(
    "продажа ювелирных изделий"
  );
  const [amount, setAmount] = useState("");

  return (
    <div className="dossier-container">
      <div className="header-background">
        <div className="dossier-header">Д О С Ь Е</div>
      </div>
      <div className="client-info">
        <h2>Информация о клиенте</h2>
        <div className="info-section">
          <div className="form-fields">
            <div className="input-group">
              <label>Фамилия:</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Имя:</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Отчество:</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>ИИН:</label>
              <input type="text" />
            </div>
          </div>
          <div className="avatar-container">
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
        <div className="info-section-row">
          <div className="input-group">
            <label>Документ, удостоверяющий личность:</label>
            <ToggleButton />
            {/* <div className="button-group">
              <button>паспорт</button>
              <button>удостоверение</button>
            </div> */}
          </div>
          <div className="input-group">
            <label>Бенефициарный собственник:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Адрес (юридический/фактический):</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Цель и характер деловых отношений:</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="footer-strip"></div>
      <div className="operation-info">
        <h2>Информация по операции</h2>
        <div className="input-group">
          <FormLabel component="legend" sx={{ color: "#000" }}>Вид участника:</FormLabel>
          <RadioGroup
            row
            aria-label="participantType"
            name="participantType"
            value={participantType}
            onChange={(e) => setParticipantType(e.target.value)}
          >
            <FormControlLabel
              value="покупатель"
              control={<Radio />}
              label="покупатель"
            />
            <FormControlLabel
              value="продавец"
              control={<Radio />}
              label="продавец"
            />
            <FormControlLabel value="иное" control={<Radio />} label="иное" />
          </RadioGroup>
        </div>
        <div className="input-group">
          <FormLabel component="legend" sx={{ color: "#000" }}>Вид операции:</FormLabel>
          <RadioGroup
            row
            aria-label="operationType"
            name="operationType"
            value={operationType}
            onChange={(e) => setOperationType(e.target.value)}
          >
            <FormControlLabel
              value="покупка"
              control={<Radio />}
              label="покупка"
            />
            <FormControlLabel
              value="продажа ювелирных изделий"
              control={<Radio />}
              label="продажа ювелирных изделий"
            />
            <FormControlLabel value="иное" control={<Radio />} label="иное" />
          </RadioGroup>
        </div>
        <div className="input-group">
          <label>Сумма:</label>
          <input type="text" />
        </div>
      </div>
      <div className="footer-strip"></div>
      <div className="operation-section">
        <h2>Информация по операции</h2>
        <div className="input-group">
          <span className={`${isSubject ? 'active' : null}`} onClick={() => setIsSubject(true)}><IoCheckmark /> 
          </span>
        </div>
      </div>
      <div className="risk-section">
        <h2>Риск-ориентированные показатели</h2>
        <div className="input-group">
          <label>Является ли клиент ПДЛ?</label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>Является ли клиент лицом без гражданства?</label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>
            Является ли клиент без адреса регистрации или пребывания в
            Республики Казахстан?
          </label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>Находится ли клиент в Списке ФТ/ФРОМУ?</label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>
            Имеются основания для сомнения в достоверности полученных данных?
          </label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>
            Предлагает ли клиент ускориться в проведении операции либо на
            нестандартных или необычно сложных схемах расчетов, использование
            которых отличаются от обычной практики?
          </label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>Ранее были ли в отношении данного клиента подозрения?</label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>
            Клиент совершает ли действия, направленные на уклонение от процедур
            надлежащей проверки клиента?
          </label>
          <ToggleButton />
        </div>
      </div>
      <div className="footer-strip"></div>
      <div className="type-section">
        <div className="input-group">
          <label>Превышает ли операция 5 000 000 тенге?</label>
          <ToggleButton />
        </div>{" "}
        <div className="input-group">
          <label>
            Совершается ли клиентом покупка ювелирного изделия, не обращая
            внимания на ценность приобретаемого товара, его размер, вес и
            природные особенности?
          </label>
          <ToggleButton />
        </div>
      </div>
      <div className="footer-strip"></div>
      <div className="product-section">
        <div className="input-group">
          <label>
            Способ предоставления услуги (без физического присутствия клиента/
            при личном присутствии клиента) ?
          </label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>
            Будут ли дополнительные сведения, которые могут повысить риск?
          </label>
          <ToggleButton />
        </div>
      </div>
      <div className="footer-strip"></div>
      <div className="rank-section">
        <div className="input-group">
          <label>Какой риск вы определите данному клиенту?</label>
          <ToggleButton />
        </div>
        <div className="input-group">
          <label>
            Правильный ответ в случае, если был ответ «Нет» на вопрос «Будут ли
            дополнительные сведения, которые могут повысить риск?»
          </label>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default DossierComponent;
