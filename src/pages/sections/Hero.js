import { Link } from "react-router-dom";

export default function SectionHero() {
  return (
    <section className="hero">
      <h2>Little Lemon</h2>
      <p>Chicago</p>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <img src={require('../../assets/photos/restaurant-food.jpg')} alt="Little Lemon restaurant cuisine"></img>
      <Link to="/reservations" className="btn">Reserve a table</Link>
    </section>
  )
}
