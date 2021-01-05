import React from 'react'
import PropTypes from 'prop-types'

function FourthSlide(props) {
    return (
        <ul className="orbit-container">
            {/* Slide  */}
            <li className="orbit-slide">
                          <span className="helper">Merci de saisir le code envoyé par SMS à votre
                            mobile</span>
                          <div className="input-item country-code-wrapper final-orbit">
                            <img className="flag" src="assets/img/svg/tunisia-flag.svg" />
                            <input className="input-number" type="text" placeholder=" (+216) 56 28 37 83" />
                            <i className="fal fa-pen" />
                          </div>
                          <div className="input-item code-verif">
                            <input type="text" placeholder="----" />
                            <span className="loading-line-placeholder" />
                            <span className="loading-line" />
                          </div>
                          <div className="resend-code">
                            <span>Rien reçu? <button>Renvoyez SMS</button></span>
                          </div>
                        </li>
                        {/* End Slide  */}  
        </ul>
    )
}

FourthSlide.propTypes = {

}

export default FourthSlide

