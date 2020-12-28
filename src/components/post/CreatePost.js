import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Collapse, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';

function CreatePost(props) {
  const [typeOfPoste, setTypeOfPost] = useState("1");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  function handleClick(e) {
    setTypeOfPost(e.target.name);
    setOpen(false)
  }
  let input;
  if (typeOfPoste == "1") {
    input = (
      <div className="tabs-content" data-tabs-content="feed-tabs">
        <div className="tabs-panel is-active" id="panel1">
          <div className="tab-one collapsed">
            <div>
              <div button onClick={handleOpen} className="tab-one-header">
                <span className="post-picture">
                  Postez photos ou Déposer directement ici !
                </span>
                <input
                  type="text"
                  placeholder="Dites quelques choses !"
                  className="input-post"
                />
                <i className="icon-camera" />
              </div>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Card style={{ padding: 10 }} className="tab-one-body">
                  <div id="dropzone">
                    <span className="here">Uploader vos photos</span>
                  </div>
                  <div className="tab-one-bottom">
                    <div className="location-icon">
                      <i className="fal fa-location" />
                    </div>
                    <div className="identify-location">
                      <i className="fal fa-map-marker-alt" />
                      <span>Identifier place</span>
                      <i className="fal fa-ellipsis-v" />
                    </div>
                    <div>
                      <i className="fal fa-map-pin" />
                      <span>Identifier Restaurant</span>
                      <i className="fal fa-ellipsis-v" />
                    </div>
                    <Button className="upload-now">Postez</Button>
                  </div>
                </Card>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (typeOfPoste == "2") {
    input = (
      <div className="tabs-content" data-tabs-content="feed-tabs">
        <div  id="panel2">
          <div className="tab-one collapsed">
            <div className="tab-one-header">
              <input button onClick={handleOpen} type="text" placeholder="Titre" />
       
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Card style={{ padding: 10 }} className="tab-one-body">
                <div className="tab-one-body">
                  <input
                    className="description"
                    type="text"
                    placeholder="Description"
                  />
                  <div id="dropzone6">
                    <span className="here">Déposer une photo ici</span>
                  </div>
                  <div className="tab-one-footer">
                    <div className="duration">
                      <span>Durée</span>
                      <span>00 : 00 : 00</span>
                    </div>
                    <button className="upload">Postez maintenant</button>
                  </div>
                </div>
              </Card>
            </Collapse>
          </div>{" "}
        </div>{" "}
      </div>
    );
  } else if (typeOfPoste == "3") {
    input = (
      <div className="tabs-content" data-tabs-content="feed-tabs">
        <div  id="panel3">
          <div className="tab-one collapsed">
            <div className="tab-one-header">
              <input button onClick={handleOpen} type="text" placeholder="Titre" />
       
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Card style={{ padding: 10 }} className="tab-one-body">
              <div className="tab-one-body">
            <input className="description" type="text" placeholder="Description" />
            <div id="dropzone7">
              <span className="here">
                Déposer une photo ici
              </span>
            </div>
            <button className="upload-promo">
              Postez maintenant
            </button>
          </div>
              </Card>
            </Collapse>
          </div>{" "}
        </div>{" "}
      </div>
    );
  }

  return (
    <div>
      <ul className="tabs feed-tabs" data-tabs id="feed-tabs">
        <li
          className={typeOfPoste == 1 ? "tabs-title is-active" : "tabs-title"}
        >
          <a
            name="1"
            aria-selected={typeOfPoste == 1 ? true : false}
            onClick={handleClick}
          >
            Post
          </a>
        </li>
        <li
          className={typeOfPoste == 2 ? "tabs-title is-active" : "tabs-title"}
        >
          <a
            data-tabs-target="panel2"
            name="2"
            aria-selected={typeOfPoste == 2 ? true : false}
            onClick={handleClick}
          >
            Vente Flash
          </a>
        </li>
        <li
          className={typeOfPoste == 3 ? "tabs-title is-active" : "tabs-title"}
        >
          <a
            data-tabs-target="panel3"
            name="3"
            aria-selected={typeOfPoste == 3 ? true : false}
            onClick={handleClick}
          >
            Promo
          </a>
        </li>
      </ul>

      {input}
    </div>
  );
}

CreatePost.propTypes = {};

export default CreatePost;
