import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          
          <img
            src="https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png"
            alt="McDonald's logo" width={100}
          />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          
          <a href="/menu"> Menu </a>
        </li>
        <li>
          
          <a href="/about-us"> About Us</a>
        </li>
        <li>
          <a href="/reservations"> Reservations </a>
        </li>
        <li>
          
          <a href="/contact"> Contact</a>
        </li>
      </ul>
      <button className="call-to-action"> Make a Reservation</button>
      <ul className="social-media">
        <li>
          <a href="https://www.facebook.com/McDonalds">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com/McDonalds">Iwitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/mcdonalds/">Instagram</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
