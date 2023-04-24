import { useState } from "react";
import { Link } from "react-router-dom";
import DoormatNav from "./navs/Doormat";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  function hamburgerClick() {
    setShowNav(!showNav);
    // alert("clicked!")
  }

  return (
    <header>
      <div className="container">
        <img src={require('../assets/icons/hamburger-menu.svg').default} className="hamburger-nav" alt="Navigation" onClick={hamburgerClick} />
        <Link to="/" className="logo">
          <img src={require('../assets/little-lemon-logo.svg').default} alt="Little Lemon logo" />
        </Link>
        <nav className={showNav ? "show" : ""}>
          <DoormatNav />
        </nav>
        <Link to="/order-online" className="order-online">
          <img src={require('../assets/icons/basket.svg').default} alt="Order Online" />
        </Link>
      </div>
    </header>
  );
}
