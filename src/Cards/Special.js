import {Link} from 'react-router-dom';

export default function SpecialCard(props) {
  return (
    <article className="menu-card">
      <img src="https://via.placeholder.com/150" alt="Customer"></img>
      <section className="menu-card-content">
        <h3>Dish Name</h3>
        <span>price</span>
        <p>description</p>
        <Link className="special-button"to="/order">Order for Delivery</Link>
      </section>
    </article>
  );
}
