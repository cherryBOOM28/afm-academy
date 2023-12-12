import './builderNavbar.scss'
import amlLogo from '../images/aml-logo.png'



export const BuilderNavbar = () => {
    return (
        <div className='builder-navbar'>
            <div className='left-part'>
                <img className='logo' src={amlLogo} alt="AML"/>
                <a className="title">
                    <span className='bold-title'>AML</span>
                    Редактор Курса
                </a>
            </div>
            <div className='right-part'>
              <div className='user-icon'>
                <a className='toggle-user-button'>TE</a>
              </div>
            </div> 
        </div>
    )
}