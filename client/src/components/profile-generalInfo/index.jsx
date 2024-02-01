import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import sfm_types from "../../components/data/sfm_types";
import go_types from "../../components/data/go_types";
import po_types from "../../components/data/po_types";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import base_url from "../../settings/base_url";

import "./style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useStyle } from "../../components/VisualModal/StyleContext";
import VisualModal from "../../components/VisualModal/VisualModal";
import { useTranslation } from "react-i18next";

const getItems = (entity_type) => {
  // console.log(entity_type)
  if (entity_type === "Субъект финансового мониторнга") return sfm_types;
  if (entity_type === "Государственные органы-регуляторы") return go_types;
  if (entity_type === "Правоохранительные органы") return po_types;
  else return ["Выберите"];
};

function ProfileGeneral() {
  const { styles, open, setOpen, checkStyle, userEntry } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (!checkStyle) return;
    console.log(userEntry);
    if (userEntry) return;
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            item.style.lineHeight = "18px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            item.style.lineHeight = "23px";
            break;
          case "large":
            item.style.fontSize = "24px";
            item.style.lineHeight = "27px";
            break;
          default:
            break;
        }
      });
    }

    handleColorModeChange();
  }, []);
  const handleColorModeChange = (mode) => {
    // Remove previous color mode classes
    const containerElement = document.querySelector(".text-content");
    if (containerElement) {
      containerElement.classList.remove(
        "light-mode",
        "dark-mode",
        "inverted-mode",
        "blue-mode"
      );
    }

    const { colorMode } = styles;

    if (containerElement) {
      containerElement.classList.add(colorMode + "-mode");
    }
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleOpenVisualModal = () => {
    console.log("OPEN");
    setOpenVisualModal((prev) => !prev);
    setOpen((prev) => !prev);
  };
  const [openVisualModal, setOpenVisualModal] = useState(open);

  const handleRemoveImages = () => {
    console.log("Images hidden");

    setImagesHidden(true);
  };

  const handleShowImages = () => {
    setImagesHidden(false);
  };

  const handleIntervalChange = (interval) => {
    console.log("Interval changed");
    setLetterInterval(interval);
  };

  const getShowImage = () => {
    return imagesHidden;
  };

  const getLetterSpacing = (interval) => {
    interval = styles.letterInterval;

    switch (interval) {
      case "medium":
        return "2px";
      case "large":
        return "4px";
      default:
        return "1px";
    }
  };
  useEffect(() => {
    const textContentElement = document.querySelector(".text-content");
    const family = styles.fontFamily;

    if (family) {
      textContentElement.style.fontFamily = family;
    }
  }, []);

  const navigate = useNavigate();
  // const [generalInfo, setGeneralInfo] = useState(null);
  const jwtToken = localStorage.getItem("jwtToken");
  // const {data, isLoading, error} = useFetch('http://localhost:8080/api/aml/auth/userInfo', {
  //     headers: {
  //         Authorization: `Bearer ${jwtToken}`,
  //     },
  // })

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/api/aml/auth/userInfo`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        if (response.status === 200) {
          setData(response.data);
          setJob(response.data.job_name);
          // console.log(response.data);
        } else {
          // Handle other status codes if needed
          setError(response.statusText);
          // console.log(response.statusText);
        }
      } catch (error) {
        setError(error);
        console.error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [isEdit]);

  const [localData, setLocalData] = useState({});
  const [changedData, setChangedData] = useState({});

  const [job, setJob] = useState("");
  const [localJob, setLocalJob] = useState("");

  const handleInfoChange = (name, value) => {
    // console.log(name, value);

    setChangedData({ ...changedData, [name]: value });
    setLocalData({ ...localData, [name]: value });
  };

  const handleSaveChanges = async () => {
    // console.log('changed data', changedData)

    const params = {
      user_id: localData.user_id,
      lastname: localData.lastname,
      firstname: localData.firstname,
      patronymic: localData.patronymic,
      email: localData.email,
      password: localData.password,
      job_name: localJob,
      ...changedData,
    };

    // console.log(params)

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    try {
      const res = await axios.patch(
        `${base_url}/api/aml/auth/change_user`,
        params,
        options
      );

      // console.log('changed password response ', res);
    } catch (error) {
      console.error(error);
    }

    setJob(localJob);
    setEdit(false);
  };

  const handleCancelChanges = () => {
    updateLocalData();
    setEdit(false);
  };

  const updateLocalData = () => {
    setLocalJob(job);
    setLocalData(data);
  };

  useEffect(() => {
    updateLocalData();
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error.message} {console.log(error)}
      </div>
    );
  }

  return (
    <div
      className="general-info"
      style={{
        background:
          styles.colorMode === "dark"
            ? "#000"
            : styles.colorMode === "light"
            ? "#f9f9f9"
            : styles.colorMode === "blue"
            ? "#9dd1ff"
            : "000",
      }}
    >
      <div className="profile-img">
        <span className="text-content">
          {(localData ? localData["firstname"] : "*****").substring(0, 1)}
        </span>
        <span className="text-content">
          {(localData ? localData["lastname"] : "*****").substring(0, 1)}
        </span>
      </div>
      <div className="fields text-content">
        <InputField
          value={localData ? localData["firstname"] : "*****"}
          isEdit={isEdit}
          name={"firstname"}
          label={"Имя"}
          hint={"Имя"}
          handleChange={handleInfoChange}
        />
        <InputField
          value={localData ? localData["phone_number"] : "*****"}
          isEdit={isEdit}
          name={"phone_number"}
          label={"Номер телефона"}
          hint={"+7 (777) 777 77 77"}
          handleChange={handleInfoChange}
        />
        <InputField
          value={localData ? localData["lastname"] : "*****"}
          isEdit={isEdit}
          name={"lastname"}
          label={"Фамилия"}
          hint={"Фамилия"}
          handleChange={handleInfoChange}
        />
        <InputField
          value={localData ? localData["email"] : "*****"}
          isEdit={isEdit}
          name={"email"}
          label={"Почта"}
          hint={"Почта"}
          handleChange={handleInfoChange}
        />
        <InputField
          value={localData ? localData["patronymic"] : "*****"}
          isEdit={isEdit}
          name={"patronymic"}
          label={"Отчество"}
          hint={"Отчество"}
          handleChange={handleInfoChange}
        />
        <SelectField
          isEdit={isEdit}
          value={localData ? localData["member_of_the_system"] : ""}
          name={"member_of_the_system"}
          selectItems={[
            "Государственные органы-регуляторы",
            "Субъект финансового мониторнга",
            "Правоохранительные органы",
            "Общественное объединение",
          ]}
          label={"Участник системы"}
          hint={"Участник системы"}
          handleChange={handleInfoChange}
        />
        {localData &&
        localData["member_of_the_system"] !== "Общественное объединение" ? (
          <SelectField
            isEdit={isEdit}
            name={"type_of_member"}
            value={localData ? localData["type_of_member"] : ""}
            selectItems={getItems(
              localData ? localData["member_of_the_system"] : ""
            )}
            label={"Вид СФМ"}
            hint={"Участник системы"}
            handleChange={handleInfoChange}
          />
        ) : (
          <InputField
            value={localData ? localData["type_of_member"] : "*****"}
            isEdit={isEdit}
            name={"type_of_member"}
            label={"Вид"}
            hint={"Введите вид"}
            handleChange={handleInfoChange}
          />
        )}
        {localData &&
        localData["member_of_the_system"] ===
          "Субъект финансового мониторнга" ? (
          <InputField
            value={localJob ? localJob : ""}
            isEdit={isEdit}
            name={"jobName"}
            label={"Занимаемая должность"}
            hint={"Введите занимаемую должность"}
            handleChange={(_, job) => {
              setLocalJob(job);
            }}
          />
        ) : null}
      </div>
      <div className="actions">
        {!isEdit ? (
          <div className={`redact`} onClick={() => setEdit(true)}>
            Изменить
          </div>
        ) : (
          <>
            <div className={`save`} onClick={() => handleSaveChanges()}>
              Сохранить
            </div>
            <div className={`cancel`} onClick={() => handleCancelChanges()}>
              Отменить
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const SelectField = ({
  name,
  label,
  value,
  selectItems,
  handleChange,
  isEdit,
}) => {
  let _value = value;

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <div className="custom-select">
        <select
          disabled={!isEdit}
          id={name}
          value={_value}
          onChange={(e) => {
            // console.log(e.target.value);
            _value = e.target.value;
            handleChange(name, e.target.value);
          }}
        >
          {selectItems.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div
          className="dropdown-icon"
          onClick={() => {
            document.getElementById(name).click();
          }}
        ></div>
      </div>
    </div>
  );
};

const InputField = ({
  name,
  label,
  value,
  hint,
  isPassword,
  handleChange,
  isEdit,
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);

  let _value = value;

  return (
    <div className="field text-content">
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          disabled={!isEdit}
          placeholder={hint}
          value={_value}
          type={showPassword ? "password" : "text"}
          name={name}
          onChange={(e) => {
            value = e.target.value;
            handleChange(name, e.target.value);
          }}
        />

        {isPassword ? (
          <div className="show-password">
            {!showPassword ? (
              <AiFillEye
                style={{ cursor: "pointer" }}
                size={23}
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              />
            ) : (
              <AiFillEyeInvisible
                style={{ cursor: "pointer" }}
                size={23}
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileGeneral;
