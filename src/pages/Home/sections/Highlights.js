import { Link } from "react-router-dom";
import DataLoader from "../../../utilities/DataLoader";
import MenuSpecialCard from "../../../components/cards/MenuSpecial";

export default function SectionHighlights() {
  // Render the specials category only
  const renderSpecials = (data) => {
    const specials = data?.specials;

    const renderSpecial = (special) => (
      <li key={special.id}>
        <MenuSpecialCard item={special} />
      </li>
    );

    return (
      <ul className="special-menu-items">
        {/* For each item in specials, call renderSpecial() to render
        an <li> element with with the <MenuSpecialCard> component. */}
        {specials?.map(special => renderSpecial(special))}
      </ul>
    );
  };

  return (
    <section className="highlights">
      <div className="container">
        <div className="section-header">
          <h2>This weeks specials!</h2>
          <Link to="/menu" className="btn">Online Menu</Link>
        </div>
        {/* Use render prop pattern to render the menu items */}
        <DataLoader url="data/menu.json" render={renderSpecials} />
      </div>
    </section>
  )
}
