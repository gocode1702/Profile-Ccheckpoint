import React from "react";
import "./Navbar.css";
import photo from "../profilephoto/img/profil emogis s.jfif";

const Navbar = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="block">
        <ul className="header-menu horizontal-list">
          <li>
            <a className="header-menu-tab" href="#1">
              <span className="icon entypo-cog scnd-font-color" />
              Settings
            </a>
          </li>
          <li>
            <a href="https://www.webtolosa.com/">
              <i type="icon" className="icon">
                Info
              </i>{" "}
            </a>
            <a href="https://www.emoji.com/">
              <span className="badge">2</span>
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#2">
              <span className="icon fontawesome-user scnd-font-color" />
              Account
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#3">
              <span className="icon fontawesome-envelope scnd-font-color" />
              Messages
            </a>
            <a className="header-menu-number" href="#4">
              5
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#5">
              <span className="icon fontawesome-star-empty scnd-font-color" />
              Favorites
            </a>
          </li>
        </ul>
        <div className="profile-menu">
          <p>
            Me{" "}
            <a href="#26">
              <span className="entypo-down-open scnd-font-color" />
            </a>
          </p>
          <div className="profile-picture small-profile-picture">
            <img width="40px" alt="my picture" src={photo} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
