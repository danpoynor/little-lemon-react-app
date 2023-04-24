import DoormatNav from "./navs/Doormat";
import SocialNav from "./navs/Social";

export default function Footer() {
  return (
    <footer>
      <div className="container">

        <img src="https://via.placeholder.com/150" alt="Vertical logo" />

        <div>
          <h4>Doormat Navigation</h4>
          <DoormatNav />
        </div>

        <div>
          <h4>Contact</h4>
          Chicago, Illinois<br />
          8418-555-1212<br />
          contact@littlelemon.com
        </div>

        <div>
          <h4>Social Media Links</h4>
          <SocialNav />
        </div>

      </div>
    </footer>
  );
}
