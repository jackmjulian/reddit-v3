import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="fixed-menu">
      <div className="logo-text">
        <img className="avatar-image" src="./images/redditlogo.png" alt="" />
        <h2>Reddit Client</h2>
      </div>
      <div className="search-box">
        <form className="search-bar">
          <input type="text" placeholder="Search..." />
        </form>
      </div>
    </div>
  );
};

export default Header;
