import React from "react";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import './Header.scss';

const header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">IMDb Lite</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user-image" />
      </div>
    </div>
  );
};

export default header;
