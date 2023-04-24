import DoormatNav from "./navs/Doormat";
import SocialNav from "./navs/Social";

export default function Footer() {
  return (
    <footer>

      <img src="https://via.placeholder.com/150" alt="Vertical logo" />

      <h4>Doormat Navigation</h4>
      <DoormatNav />

      <h4>Contact</h4>
      Address<br />
      Phone number<br />
      Email

      <h4>Social Media Links</h4>
      <SocialNav />

    </footer>
  );
}

// Contact info
// Links to social-media
// Doormat navigation
// Logo
