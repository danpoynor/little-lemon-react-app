import { Link } from "react-router-dom";

import FacebookSVG from '../../assets/icons/facebook.svg';
import InstagramSVG from '../../assets/icons/instagram.svg';
import YelpSVG from '../../assets/icons/yelp.svg';

const socialmedia = [
  {
    id: 1,
    name: 'Facebook',
    href: 'https://www.facebook.com',
    title: 'Follow Little Lemon on Facebook',
    icon: FacebookSVG,
  },
  {
    id: 2,
    name: 'Instagram',
    href: 'https://www.instagram.com',
    title: 'Follow Little Lemon on Instagram',
    icon: InstagramSVG,
  },
  {
    id: 3,
    name: 'Yelp',
    href: 'https://www.yelp.com',
    title: 'Check out Little Lemon on Yelp',
    icon: YelpSVG,
  },
];

export default function SocialNav() {
  return (
    <ul className="social-nav">
      {socialmedia.map(({ id, name, href, title, icon }) => {
        return (
          <li key={id}>
            <Link to={href}>
              <img src={icon} alt={name} /> {name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
