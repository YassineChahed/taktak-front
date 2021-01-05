import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
    return (
        <div className="who-comment">
        <div className="who-comment-info">
          <img src={props.comment.commentHandler.profileImage} />
          <span className="who-comment-info-username">{props.comment.commentHandler.firstName} </span>
        </div>
        <div className="who-comment-info-description">
          {props.comment.content}
        </div>
      </div>
    )
}

Comment.propTypes = {

}

export default Comment

