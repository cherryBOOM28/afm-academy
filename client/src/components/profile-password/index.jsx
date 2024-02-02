import React, { useState, useEffect } from 'react';

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

import './style.scss';
import base_url from '../../settings/base_url';
import axios from 'axios';
import { useStyle } from "../../components/VisualModal/StyleContext";
import { useTranslation } from "react-i18next";


function ProfilePassword(props) {
    const { styles, open, setOpen, checkStyle, userEntry } = useStyle();
    const [imagesHidden, setImagesHidden] = useState(false);
    const [letterInterval, setLetterInterval] = useState("standard");
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
  
    const [activeTab, setActiveTab] = useState(1);
  
    useEffect(() => {
      if(!checkStyle) return;
      console.log(userEntry)
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
          "blue-mode",
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

    const [isEdit, setEdit] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const jwtToken = localStorage.getItem('jwtToken');

    const [data, setData] = useState(null);

    const [passwordMismatchError, setPasswordMismatchError] = useState(false);

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
                } else {
                    // console.log(response.statusText);
                }
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
      }, [isEdit]);

    const handleSaveChanges = async () => {
        if (password !== confirmPassword) {
            setPasswordMismatchError(true);
            return;
        };

        setPasswordMismatchError(false);

        const params = {
            "user_id": data.user_id,
            "lastname": data.lastname,
            "firstname": data.firstname,
            "patronymic": data.patronymic,
            "email": data.email,
            "password": password,
        };

        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        };

        try {
            const res = await axios.patch(`${base_url}/api/aml/auth/change_user`, params, options );
    
            // console.log('changed password response ', res);
        } catch (error) {
            console.error(error);
        }

        setPassword('');
        setConfirmPassword('');
        setEdit(false)
    }

    const handleCancelChanges = () => {
        setEdit(false);
        setPassword('');
        setConfirmPassword('');
    }

    const handlePasswordChange = (password) => {
        setPassword(password);
    }

    const handlePasswordConfirmChange = (password) => {
        setConfirmPassword(password)
    }

    return ( 
        <div className="profile-password text-content"
        style={{
            background: styles.colorMode === "dark" ? "#000" : styles.colorMode === "light" ? "#fff" : styles.colorMode === "blue" ? "#9dd1ff" : "#000",
            letterSpacing: getLetterSpacing(letterInterval)
          }}
        >
            <div className="title"
             style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
              }}
            >Сменить пароль</div>
            <div className="fields"
            style={{
                color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
              }}
            >
                <InputField
                    style={{
                        color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
                        letterSpacing: getLetterSpacing(letterInterval)
                      }}
                    value={password}
                    isPassword={true}
                    isEdit={isEdit}
                    name={'password'}
                    label={'Новый пароль'}
                    hint={'Введите новый пароль'}
                    handleChange={handlePasswordChange}/>
                <InputField
                style={{
                    color: styles.colorMode === "dark" ? "#fff" : styles.colorMode === "light" ? "#343434" : styles.colorMode === "blue" ? "#063462" : "#000",
                    letterSpacing: getLetterSpacing(letterInterval)

                  }}
                    value={confirmPassword}
                    isPassword={true}
                    isEdit={isEdit}
                    name={'confirmPassword'}
                    label={'Повторите пароль'}
                    hint={'Введите повторно пароль'}
                    handleChange={handlePasswordConfirmChange}/>
            </div>

            {
                passwordMismatchError 
                ? (
                    <div className="error">
                        <h3>* Пароли не совпадают</h3>
                    </div>
                ) : null
            }

            <div className="actions">
                {
                    !isEdit 
                        ? (
                            <div 
                                className={`redact`} 
                                onClick={() => setEdit(true)}
                            >
                                Изменить
                            </div>
                        )
                        : (
                            <>
                            <div 
                                className={`save`} 
                                onClick={() => handleSaveChanges()}
                            >
                                Сохранить
                            </div>
                            <div 
                                className={`cancel`} 
                                onClick={() => handleCancelChanges()}
                            >
                                Отменить
                            </div>
                            </>
                        )
                }
            </div>
        </div>
    );
}

const InputField = ({
    name,
    label,
    value,
    hint,
    isPassword,
    handleChange,
    isEdit,
    style
}) => {

    const [showPassword, setShowPassword] = useState(
        isPassword
    );

    let _value = value;

    return (
        <div className='field'
        >
            <label className='text-content' 
              htmlFor={name}>{label}</label>
            <div>
                <input
                    disabled={!isEdit}
                    placeholder={hint}
                    value={_value}
                    type={showPassword
                        ? 'password'
                        : 'text'}
                    name={name}
                    onChange={(e) => {
                        handleChange(e.target.value)
                    }}
                    style={style}
                    />
                
                {isPassword 
                    ? (
                        <div className='show-password'> 
                            {
                                showPassword ?
                                    <AiFillEye style={{cursor: 'pointer'}} size={23} onClick={() => {
                                        setShowPassword(prev => !prev)
                                    }}/>
                                :
                                    <AiFillEyeInvisible style={{cursor: 'pointer'}} size={23} onClick={() => {
                                        setShowPassword(prev => !prev)
                                    }}/>
                            } 
                        </div> 
                    ) : null
                }
            </div>
        </div>
    )
}

export default ProfilePassword;