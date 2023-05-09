import { Link } from "react-router-dom";

export default function SectionHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <p className="location">Chicago</p>
          <p className="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/reservations" className="btn">Reserve a table</Link>
        </div>
        <img className="hero-image" src={require('../../../assets/photos/restaurant-food.jpg')} alt="Little Lemon restaurant cuisine" />
      </div>
    </section>
  )
}
