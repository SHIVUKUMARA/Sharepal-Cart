import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="dashboard-heading">
        <NavLink to="/">
          <img
            src="https://nsrcel.org/wp-content/uploads/2022/08/Swnac-Ekiraya-Services-Pvt-Ltd-Sharepal-1.png"
            alt="logo"
          />
        </NavLink>
        <NavLink to="/details" className="my-orders-link">
          My Orders
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
