import React, {useEffect, useState} from 'react'
import './tabBasicInfo.scss'
import plusSign from '../images/pluc-image.svg'
import base64Course from './course-default';

function fileToBase64(file, callback) {
    if (!file) {
      return;
    }
  
    const reader = new FileReader();
    
    reader.onloadend = () => {
      if (typeof callback === 'function') {
        callback(reader.result);
      }
    };
  
    reader.readAsDataURL(file);
}

const TabBasicInfo = ({ nextStep, title: initialTitle, audience: initAud, lang: initLang, category: initCTG, price: initPrice, image: initImage }) => {
    const [title, setTitle] = useState(initialTitle || "")
    const [audience, setAudience] = useState(initAud || "")
    const [lang, setLang] = useState(initLang || "")
    const [category, setCategory] = useState(initCTG || "")
    const [price, setPrice] = useState(initPrice || 0)
    const [image, setImage] = useState(initImage || "")
    
    const [imageSource, setImageSource] = useState('default-image-source');

    const [defImage, setDefImage] = useState(true)

    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        if (image) {
          setImageSource(image)
        } else {
          setImageSource(plusSign);
        }
    }, [image]);

    useEffect(() => {
        if (defImage) {
            setImage(base64Course)
        } else {
            setImage("")
        }
    }, [defImage]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
      
        fileToBase64(selectedFile, (base64String) => {
            setImage(base64String)
        });
    };
    
    const saveAndNext = () => {
        const formData = {
            title,
            audience,
            lang,
            category,
            price,
            image,
        };
        
          // Check if any of the values are still in their initial state
        if (
            Object.values(formData).some(value => value === '' || value === 0)
            ) {
            // Alert the user to fill in all the fields
            alert('Для продолжения необходимо заполнить все поля');
        } else {
            // Log the combined form data
            console.log('Combined Form Data:', formData);
        
            // Call your nextStep function or perform any other action
            nextStep();
        }
    }

    return (
        <div className="tab-container">
            <h1>Основные данные</h1>
            <div className="inputs">
                <div className="text-inputs">
                    <div className="input-title">
                        <label htmlFor="title">Введите название курса</label>
                        <input value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }} type="text" name="title" id="cheese" placeholder=""/>
                    </div>
                    <div className="other-basic-inputs">
                        <div className="input-audience">
                            <label htmlFor="audience">Аудитория (Тип Субъекта)</label>
                            <select value={audience} onChange={(e) => {
                                setAudience(e.target.value)
                            }} name="audience" id="audience">
                                <option value="">--Выберите тип субъекта--</option>
                                <option value="sfm">СФМ</option>
                            </select>
                        </div>
                        <div className="input-lang">
                            <label htmlFor="language">Язык курса</label>
                            <select value={lang} onChange={(e) => {
                                setLang(e.target.value)
                            }} name="language" id="language">
                                <option value="">--Выберите язык курса--</option>
                                <option value="ru">Русский</option>
                                <option value="en">Английский</option>
                                <option value="kz">Казахский</option>
                            </select>
                        </div>
                        <div className="input-category">
                            <label htmlFor="category">Категория</label>
                            <select value={category} onChange={(e) => {
                                setCategory(e.target.value)
                            }} name="category" id="category">
                                <option value="">--Выберите категорию--</option>
                                <option value="aml">AML Academy</option>
                            </select>
                        </div>
                        <div className="input-price">
                            <label htmlFor="price">Цена</label>
                            <input value={price} onChange={(e) => {
                                setPrice(e.target.value)
                            }} type="number" min="0" name="price" id="price"/>
                        </div>
                    </div>
                </div>
                <div className="photo-input">
                    <h1>Обложка курса</h1>

                    <div className='image-box'>

                        {image == "" ?
                            <label htmlFor="photo">
                                <img className="plus-sign" src={imageSource} alt="+"></img>
                            </label>
                            :
                            <label htmlFor="photo">
                                <img className="image-album" src={imageSource} alt="+"></img>
                            </label>

                        }
                        <input onChange={handleFileChange} className="input-image" type="file" id="photo" name="photo" accept="image/png, image/jpeg, image/jpg" />
                    
                    </div>
                    <div>
                        <input onChange={handleFileChange} type="file" id="photo" name="photo" accept="image/png, image/jpeg" />
                    </div>
                    <div className={` ${defImage ? 'checked' : 'unchecked'}`} >
                        <input checked={defImage} onChange={(e) => setDefImage(e.target.checked)} type="checkbox" id="default" name="default" value="default" />
                        <label htmlFor="default">Использовать обложку по умолчанию</label>
                    </div>
                </div>

            </div>
            <div className='submit-or-back'>
                <a className='button-next' onClick={saveAndNext}>Перейти далее</a>
                <a className='button-back'>Вернутся назад</a>
            </div>
        </div>
    )
}

export default TabBasicInfo