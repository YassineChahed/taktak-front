import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Avatar, Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "20%",
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SuggestionItem(props) {
  const classes = useStyles();
  const { user } = props;
  const [hoverOverCard, setHoverOverCard] = useState(false);
  return (
    // <div className="profile-follow-card">
    //   <div className="profile-follow-card-header">
    //     <img
    //       className="avatar"
    //       src="assets/img/avatar.png"
    //     />
    //   </div>
    //   <div className="profile-follow-card-body">
    //     <div className="profile-follow-card-body-header">
    //       <div className="profile">
    //         <span className="profile-name">
    //           Magic Kindle
    //         </span>
    //         <span className="profile-location">
    //           <i className="icon-marker" />
    //           Tunis, Cuisine{" "}
    //         </span>
    //       </div>
    //     </div>
    //     <div className="profile-follow-card-body-invisible">
    //       <button>
    //         <i className="fal fa-user-plus" />
    //         Suivre
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <Card
      style={
        hoverOverCard
          ? { backgroundColor: "#fd6a00" }
          : { backgroundColor: "white" }
      }
      className={classes.root}
      onMouseEnter={() => setHoverOverCard(true)}
      onMouseLeave={() => setHoverOverCard(false)}
    >
      <CardContent>
        <CardContent>
          <Avatar style={{ height: 60, width: 60 }} src={user.profileImage} />
        </CardContent>
        {!hoverOverCard ? (
          <div>
            {" "}
            <span
              className="profile-name"
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "1.4rem",
              }}
            >
              {user.name}
            </span>
            <Typography>
              <span
                style={{
                  fontWeight: "normal",
                  fontSize: " 1.4rem",
                  textAlign: " left",
                  color: " #484848",
                  opacity: 0.8,
                }}
                className="profile-location"
              >
                <i className="icon-marker" />
                {user.location}
              </span>
            </Typography>
          </div>
        ) : (
          <div>
            <CardActions>
              <Button
                style={{
                  outline: "none",
                  cursor: "pointer",
                  height: "4rem",
                  padding: "1rem",
                  borderRadius: "5px",
                  fontWeight: "normal",
                  fontSize: "1.4rem",
                  textAlign: "left",
                  width: "9.8rem",
                  height: "4rem",
                  borderRadius: "5px",
                  background: "#fff",
                  color: "#ff6900",
                }}
                size="large"
              >
                <Typography>SUIVRE</Typography>
              </Button>
            </CardActions>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

SuggestionItem.propTypes = {};

export default SuggestionItem;
