import React from 'react'
import PropTypes from 'prop-types'

function AvatarRestaurant(props) {
    return (
        <div className="restaurant">
                <img src={props.avatarImage} />
         </div>
    )
}

AvatarRestaurant.propTypes = {

}

export default AvatarRestaurant

