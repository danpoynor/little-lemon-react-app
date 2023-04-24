import { Link } from "react-router-dom";
import SpecialCard from "../../components/cards/Special";

export default function SectionHighlights() {
  return (
    <section className="highlights">
      <div className="container">
        <div className="section-header">
          <h2>This weeks specials!</h2>
          <Link to="/menu" className="btn">Online Menu</Link>
        </div>
        <SpecialCard />
        <SpecialCard />
        <SpecialCard />
      </div>
    </section>
  )
}
