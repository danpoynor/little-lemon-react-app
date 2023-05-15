import { Link } from "react-router-dom";
import DoormatNav from "./navs/Doormat";
import SocialNav from "./navs/Social";

export default function Footer() {
  return (
    <footer>
      <div className="container">

        <div className="logo-area">
          <Link to="/" className="logo">
            <img src={require('../assets/logos/little-lemon-logo-vert-2.svg').default} alt="Little Lemon logo" />
          </Link>
        </div>

        <div className="content-area">

          <div className="doormap-area">
            <h4>Site Map</h4>
            <nav>
              <DoormatNav />
            </nav>
          </div>

          <div className="contact-area">
            <h4>Contact</h4>
            Chicago, Illinois<br />
            312-555-1212<br />
            contact@littlelemon.com
          </div>

          <div className="social-area">
            <h4>Social Media</h4>
            <SocialNav />
          </div>

        </div>

      </div>
    </footer>
  );
}
