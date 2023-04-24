import { Link } from "react-router-dom";
import SpecialCard from "../../components/cards/Special";

export default function SectionHighlights() {
  return (
    <section className="highlights">
      <h2>Specials</h2>
      <Link to="/menu" className="nav-item">Menu</Link>
      <SpecialCard />
      <SpecialCard />
      <SpecialCard />
    </section>
  )
}
