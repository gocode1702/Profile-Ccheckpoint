import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePhoto from './profile/profilephoto/ProfilePhoto'
import Navbar from './profile/navbar/Navbar';
import FullName from "./profile/fullname/FullName";
import Address from './profile/address/Address';


import Info from "./profile/info/Info";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <Navbar />
      <div className="main-container">
        <FullName />
        <Address />
        <Info />
      </div>
    </div>
  );
}

export default App
