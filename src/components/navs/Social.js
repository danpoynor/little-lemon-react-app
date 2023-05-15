import { Link } from "react-router-dom";
import DataLoader from "../../utilities/DataLoader";

export default function DoormatNav() {
  const renderSocialLinks = (data) => {
    return (
      <ul className="social-nav">
        {data?.map(link => (
          <li key={link.id}>
            <Link
              to={link.url}
              style={{ backgroundImage: `url(images/social-icons/${link.icon})` }}
              title={link.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <DataLoader url="data/links-social.json" render={renderSocialLinks} />
  )
}
