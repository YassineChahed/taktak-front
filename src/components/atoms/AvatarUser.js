import React from 'react'
import PropTypes from 'prop-types'

function AvatarUser(props) {
    return (
        <span className="user-avatar">
                <img src={props.avatarImage} />
        </span>
    )
}

AvatarUser.propTypes = {

}

export default AvatarUser

