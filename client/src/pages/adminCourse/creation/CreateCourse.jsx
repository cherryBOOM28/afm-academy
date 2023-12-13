import React, {useEffect, useState} from 'react'
import './creation.scss'
import {BuilderNavbar} from '../builderNavbar/BuilderNavbar'
import saveButton from '../images/save-button.svg'
import TabBasicInfo from '../TabBasicInfo/TabBasicInfo'
import FAQStep from '../TabFAQ/FaqStep'
import TabConstructor from '../tabConstructor/tabConstructor'


const CreateCoursePage = () => {
    
    const [currentStep, setCurrentStep] = useState("basic-info")

    const toFAQ = () => {
        setCurrentStep("faq")
    }

    const toConsctrutor = () => {
        setCurrentStep("constructor")
    }


    return (
        <div className='page'>
            <BuilderNavbar/>
            <div className='tab-and-content'>
                <div className='creation-left-bar'>
                    <a className='title'>Создание курса</a>
                    <div className='steps'>
                        <div className={`step ${currentStep == 'basic-info' ? 'active' : ''}`}>
                            <div className='step-button'/>
                            <p className='step-title'>Основные данные</p>
                        </div>
                        <div className={`step ${currentStep == 'faq' ? 'active' : ''}`}>
                            <div className='step-button'/>
                            <p className='step-title'>FAQ</p>
                        </div>
                        <div className={`step ${currentStep == 'constructor' ? 'active' : ''}`}>
                            <div className='step-button'/>
                            <p className='step-title'>Программа Курса</p>
                        </div>
                    </div>
                    <div className='save-course-button'>
                        <img src={saveButton} alt="save"/>
                        <a>Сохранить изменения</a>
                    </div>
                </div>
                {
                    currentStep === 'basic-info' ? <TabBasicInfo nextStep={toFAQ} /> :
                    currentStep === 'faq' ? <FAQStep nextStep={toConsctrutor} /> :
                    currentStep === 'constructor' ? <TabConstructor /> :
                    null
                }
            </div>
        </div>
    )
}



export default CreateCoursePage