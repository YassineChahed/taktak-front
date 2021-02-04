import React from 'react'
import PropTypes from 'prop-types'
import Rcards from './Rcards'

function Rflollows(props) {
    const tab = props.rFollows.sample.map(el=> <Rcards restaurant={el} />)
    return (
        <div>
            <div className="restaurants-followed profile-section" style={{height: 400 , overflow : "scroll"}}>
        <h3 className="restaurants-followed-title profile-title">
          Restaurants suivis
        </h3>
        <div className="you-may-like">
          <div className="you-may-like-body">
            {tab}
        
          </div>
        </div>
      </div>
    
        </div>
    )
}

Rflollows.propTypes = {

}

export default Rflollows

