import React from 'react'
import PropTypes from 'prop-types'
import ProfileStories from './ProfileStories'

function ProfileHeader(props) {
    const {user} = props
    return (
        <div className="profile-page-header">
        <div className="header-inner container">
          <div className="profile-picture">
            <img className="profile-picture-img" src={user.profileImage} />
            <img className="profile-picture-img-hover" src={user.profileImage} />
          </div>
          <div className="user-info">
            <div className="user-info-info">
              <span className="name">{user.firstName} {user.lastName} <i className="icon-pen user-change" /></span>
              <span className="location">
                <i className="fal fa-map-marker-alt" /> {user.location}</span>
              <div className="tags">{user.tags.map(el => (`#${el} `))}</div>
            </div>
           <ProfileStories profileImage={user.profileImage} stories={user.stories}/>
          </div>
        </div>
      </div>
     
    )
}

ProfileHeader.propTypes = {

}

export default ProfileHeader

