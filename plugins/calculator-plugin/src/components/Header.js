import React, { useState } from "react";
import "../assets/css/style.css";
import av1 from "../assets/images/Avatar1.svg";
import av2 from "../assets/images/Avatar2.svg";
import av3 from "../assets/images/Avatar3.svg";
import av4 from "../assets/images/Avatar4.svg";
import av5 from "../assets/images/Avatar5.svg";

const Header = () => {
  return (
    <div className="">
      <h1 className="main-title">How much will I make on this fix & flip?</h1>
      <p className="sub-title">
        Use our calculator to estimate the cost of buying and financial proceeds
        you could earn from the sale.
      </p>
      <div className="avatars">
        <span className="avatar">
          <img src={av1} />
        </span>
        <span className="avatar">
          <img src={av2} />
        </span>
        <span className="avatar">
          <img src={av3} />
        </span>
        <span className="avatar">
          <img src={av4} />
        </span>
        <span className="avatar">
          <img src={av5} />
        </span>
        <p className="avatar-text">Over 10k happy users</p>
      </div>
    </div>
  );
};
export default Header;
