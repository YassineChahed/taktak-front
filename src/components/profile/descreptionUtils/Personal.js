import React,{useState} from 'react'
import PropTypes from 'prop-types'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { IconButton } from '@material-ui/core';
function Personal(props) {
  const [showBirthDate, setShowBirthDate] = useState(props.birthDate.show)
  const handleShow = () =>{
    setShowBirthDate(!showBirthDate)
    //action : send new value to back
  }
    return (
        <div className="personal-information profile-section">
        <h3 className="personal-information-title profile-title">
          Informations personnelles
        </h3>
        <div className="personal-information-body">
          <div className="info-item">
            <span className="info-label">Date de naissance</span>
            <span className="info-value">{props.birthDate.value}</span>
            <span className="property" onClick={handleShow}>{showBirthDate? < VisibilityIcon fontSize="large" style={{ color: "#ff6900" }} /> : < VisibilityOffIcon fontSize="large" style={{ color: "#ff6900" }} />}</span>
           
            
          </div>
          <div className="info-item">
            <span className="info-label">Gouvernorat</span>
            <span className="info-value">{props.city}</span>
            <span className="property">Changer</span>
          </div>
          <div className="info-item">
            <span className="info-label">Langues</span>
            <span className="info-value">{props.languages.map(el => (`${el}/`))}</span>
          </div>
          <div className="info-item">
            <span className="info-label">E-mail</span>
            <span className="info-value">{props.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone</span>
            <span className="info-value">{props.phone}</span>
          </div>
        </div>
      </div>

    )
}

Personal.propTypes = {

}

export default Personal

