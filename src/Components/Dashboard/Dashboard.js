import React from "react";
import "./dashboard.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-container">
        <Header />
        <div className="welcome-message">
          <h1>Welcome</h1>
          <h2>To Sharepal Cart</h2>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
