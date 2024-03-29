import React from "react";

function Navigation() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="/images/brand_logo.png"
            alt=""
          />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Location</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation;
