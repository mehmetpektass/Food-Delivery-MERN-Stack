import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Choose Your Favourite Food Here</h2>
        <p>
          "Craving something delicious? You're in the right place!
          <span> Fancy</span> brings you a world of flavors right to your
          doorstep. Browse our diverse restaurants, find your favorites or try
          something new.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
