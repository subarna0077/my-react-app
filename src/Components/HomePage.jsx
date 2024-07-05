import React from "react";
import './HomePage.css'

const HomePage = () => {
  return (
    <div>
      <nav>
        <div className="left">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        </div>

        <div className="right">
          <a href="#">Buy our plans</a>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
