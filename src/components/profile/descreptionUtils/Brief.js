import React from 'react'
import PropTypes from 'prop-types'

function Brief(props) {
    return (
        <div className="brief profile-section">
        <h3 className="brief-title profile-title">En Bref</h3>
        <p>
         {props.description}
        </p>
        {/* <span><i className="icon-small-arrow-right" /> Afficher plus</span> */}
      </div>
      
    )
}

Brief.propTypes = {

}

export default Brief

