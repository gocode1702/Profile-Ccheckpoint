import React from "react";
import "./FullName.css";
import photo from "../profilephoto/img/profil emogis s.jfif";

const FullName = () => {
  return (
    <div>
      {/* MIDDLE-CONTAINER */}
      <div className="middle-container container">
        <div className="profile block">
          {" "}
          {/* PROFILE (MIDDLE-CONTAINER) */}
          <a className="add-button" href="#28">
            <span className="icon entypo-plus scnd-font-color" />
          </a>
          <div className="profile-picture big-profile-picture clear">
            <img width="150px" alt="my picture picture" src={photo} />
          </div>
          <h1 className="user-name">Wahid WBA</h1>
          <div className="profile-description">
            <p className="scnd-font-color">Nice to meet you</p>
          </div>
          <ul className="profile-options horizontal-list">
            <li>
              <a className="comments" href="#40">
                <p>
                  <span className="icon fontawesome-comment-alt scnd-font-color" />
                  23
                </p>
              </a>
            </li>
            <p />
            <li>
              <a className="views" href="#41">
                <p>
                  <span className="icon fontawesome-eye-open scnd-font-color" />
                  841
                </p>
              </a>
            </li>
            <p />
            <li>
              <a className="likes" href="#42">
                <p>
                  <span className="icon fontawesome-heart-empty scnd-font-color" />
                  49
                </p>
              </a>
            </li>
            <p />
          </ul>
        </div>
        <div className="weather block clear">
          {" "}
          {/* WEATHER (MIDDLE-CONTAINER) */}
          <h2 className="titular">
            <span className="icon entypo-location" />
            <strong>marsa</strong>Climate-each-day
          </h2>
          <div className="current-day">
            <p className="current-day-date">FRI 29/06</p>
            <p className="current-day-temperature">
              24º
              <span className="icon-cloudy" />
            </p>
          </div>
          <ul className="next-days">
            <li>
              <a href="#43">
                <p className="next-days-date">
                  <span className="day">SAT</span>{" "}
                  <span className="scnd-font-color">29/06</span>
                </p>
                <p className="next-days-temperature">
                  25º
                  <span className="icon icon-cloudy scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="#44">
                <p className="next-days-date">
                  <span className="day">SUN</span>{" "}
                  <span className="scnd-font-color">30/06</span>
                </p>
                <p className="next-days-temperature">
                  22º
                  <span className="icon icon-cloudy2 scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="#45">
                <p className="next-days-date">
                  <span className="day">MON</span>{" "}
                  <span className="scnd-font-color">01/07</span>
                </p>
                <p className="next-days-temperature">
                  24º
                  <span className="icon icon-cloudy2 scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="#46">
                <p className="next-days-date">
                  <span className="day">TUE</span>{" "}
                  <span className="scnd-font-color">02/07</span>
                </p>
                <p className="next-days-temperature">
                  26º
                  <span className="icon icon-cloudy scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="">
                <p className="next-days-date">
                  <span className="day">WED</span>{" "}
                  <span className="scnd-font-color">03/07</span>
                </p>
                <p className="next-days-temperature">
                  27º
                  <span className="icon icon-sun scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="">
                <p className="next-days-date">
                  <span className="day">THU</span>{" "}
                  <span className="scnd-font-color">04/07</span>
                </p>
                <p className="next-days-temperature">
                  29º
                  <span className="icon icon-sun scnd-font-color" />
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className="tweets block">
          {" "}
          {/* TWEETS (MIDDLE-CONTAINER) */}
          <h2 className="titular">
            <span className="icon zocial-twitter" />
            LATEST TWEETS
          </h2>
          <div className="tweet first">
            <p>
              I enjoy spending many dedicated hours with your team members,
              gathering information, communicating effectively, and testing.
              <a className="tweet-link" href="#17">
                @open source
              </a>
            </p>
            <p>
              <a className="time-ago scnd-font-color" href="#18">
                3 minutes ago
              </a>
            </p>
          </div>
          <div className="tweet">
            <p>
              Your efforts and patience have led to this great achievement. We
              are very proud and grateful for your hard work. Congratulations.
              Sincerely,
              <a className="tweet-link" href="#19">
                #guithub
              </a>
            </p>
            <p>
              <a className="scnd-font-color" href="#20">
                6 hours ago
              </a>
            </p>
          </div>
        </div>
        <ul className="social block">
          {" "}
          {/* SOCIAL (MIDDLE-CONTAINER) */}
          <li>
            <a href="#50">
              <div className="facebook icon">
                <span className="zocial-facebook" />
              </div>
              <h2 className="facebook titular">SHARE TO FACEBOOK</h2>
            </a>
          </li>
          <li>
            <a href="#51">
              <div className="twitter icon">
                <span className="zocial-twitter" />
              </div>
              <h2 className="twitter titular">SHARE TO TWITTER</h2>
            </a>
          </li>
          <li>
            <a href="#52">
              <div className="googleplus icon">
                <span className="zocial-googleplus" />
              </div>
              <h2 className="googleplus titular">SHARE TO GOOGLE+</h2>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullName;
