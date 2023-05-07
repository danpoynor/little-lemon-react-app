import { Link } from "react-router-dom";
import DoormatNav from "./navs/Doormat";
import SocialNav from "./navs/Social";

export default function Footer() {
  return (
    <footer>
      <div className="container">

        <Link to="/" className="logo">
          <img src={require('../assets/logos/little-lemon-logo-vert-2.svg').default} alt="Little Lemon logo" />
        </Link>

        <div>
          <h4>Navigation</h4>
          <nav>
            <DoormatNav />
          </nav>
        </div>

        <div>
          <h4>Contact</h4>
          Chicago, Illinois<br />
          312-555-1212<br />
          contact@littlelemon.com
        </div>

        <div>
          <h4>Social Media</h4>
          <SocialNav />
        </div>

      </div>
    </footer>
  );
}
