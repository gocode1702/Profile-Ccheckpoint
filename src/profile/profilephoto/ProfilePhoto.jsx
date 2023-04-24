import React from "react";
import "./ProfilePhoto.css";
import photo from "./img/profil emogis s.jfif";


const ProfilePhoto = () => {
  return (
    <div >
      <img width="150px" alt="my picture picture" src={photo} />
    </div>
  );
};

export default ProfilePhoto;
