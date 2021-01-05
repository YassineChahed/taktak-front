import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

function CommentsBox(props) {
 
     
const  commentsLayer = props.comments.map(el => {
     return <Comment comment={el}/>
 })
 
    return (
        <div className="post-card-comments-list">
            {commentsLayer}
        </div>
    )
}

CommentsBox.propTypes = {

}

export default CommentsBox

