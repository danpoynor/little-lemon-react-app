import { NavLink } from "react-router-dom";
import DataLoader from "../../utilities/DataLoader";

export default function DoormatNav() {
  const renderNavLinks = (data) => {
    // Render 'public' navlinks only
    const publicLinks = data?.filter(link => link.roles?.includes('public'));

    const navItem = (link) => (
      <li key={link.id}>
        <NavLink to={link.url} className={(navData) => (navData.isActive ? 'active' : '')}>
          {link.name}
        </NavLink>
      </li>
    );

    return (
      <ul className="doormat">
        {publicLinks?.map(link => navItem(link))}
      </ul>
    );
  };

  return (
    <DataLoader url="data/links-nav.json" render={renderNavLinks} />
  )
}
