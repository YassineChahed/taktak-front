import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FollowersList from './FollowersList'

function Followers(props) {
    const [panel, setPanel] = useState(true)
    return (
        <div className="followers profile-section" >
        <div className="follower-title">
          <h3 className={panel?" profile-title":"your-followers-title "} onClick={()=>setPanel(true)}>Liste des amis suivis</h3>
          <h3 className={!panel?" profile-title":"your-followers-title "} onClick={()=>setPanel(false)}>
            Liste des amis qui te suivent
          </h3>
        </div>
        <FollowersList followOrfollwers={panel} followers={props.followers} follows={props.follows} rFollows={props.rFollows} />
      </div>
      
    )
}

Followers.propTypes = {

}

export default Followers

