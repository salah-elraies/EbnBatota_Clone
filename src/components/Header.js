import React from 'react';
// import ReactPlayer from 'react-player';
import "./Header.css"
import vid from './thisisegypt.mp4'
// const url = "./../../public/thisisegypt.mp4";
const Header = () => {
  return (  
    <header className="header-boss">
      <div className="header">
        <video src={vid} autoPlay={true} muted loop className="backVid"></video>
        <div className="overlay"></div>
        <a href="#tours" className="tours-btn d-none d-sm-block">view tours</a>
      </div>
    </header>
  )
}
   
export default Header