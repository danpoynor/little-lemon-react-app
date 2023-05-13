import { Link } from "react-router-dom";
import DoormatNav from "./navs/Doormat";
import SocialNav from "./navs/Social";

export default function Footer() {
  return (
    <footer>
      <div className="container">

        <div className="footer-logo">
          <Link to="/" className="logo">
            <img src={require('../assets/logos/little-lemon-logo-vert-2.svg').default} alt="Little Lemon logo" />
          </Link>
        </div>

        <div className="doormap">
          <h4>Navigation</h4>
          <nav>
            <DoormatNav />
          </nav>
        </div>

        <div className="contact">
          <h4>Contact</h4>
          Chicago, Illinois<br />
          312-555-1212<br />
          contact@littlelemon.com
        </div>

        <div className="social">
          <h4>Social Media</h4>
          <SocialNav />
        </div>

      </div>
    </footer>
  );
}
