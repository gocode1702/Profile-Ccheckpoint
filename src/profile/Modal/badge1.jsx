import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import {modal} from  "react-modal";
import { Form, FormControl, Button } from "react-bootstrap";

export default class Badge1 extends Component {
  render() {
    return (
      <div>
        <div className="container2">
          <a href="#">
            <i
              type="icon"
              className="icon"
              data-toggle="modal"
              data-target="#myModal"
            >
              News{" "}
            </i>{" "}
          </a>
          <a href="https://www.emoji.com/">
            <span className="badge">1</span>
          </a>

          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 className="modal-title">INFO</h4>
                </div>
                <div className="modal-body">
                  <div>
                    <h4>
                      <p>
                        {" "}
                        👉Bonjour, Quel est pour toi le plus logique, le plus
                        simple et le plus propre à faire?. Ensuite, à quoi sert
                        Reactjs !important? Le sais tu?👌 Tu as la réponse,
                        seulement tu réfléchit trop 😺
                        <br />
                        ⚠️ Eviter l'egoismique
                        <br />
                        👉N'oublie pas de partager massivement, et mieux faire
                        relayer l"information
                      </p>
                    </h4>
                  </div>
                  <div className="image">
                    {" "}
                    <img src={IMG} className="img" alt="Cinque Terre" />
                  </div>{" "}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://www.webtolosa.com/">
          <i type="icon" className="icon">
            Info
          </i>{" "}
        </a>
        <a href="https://www.emoji.com/">
          <span className="badge">2</span>
        </a>
      </div>
    );
  }
}


