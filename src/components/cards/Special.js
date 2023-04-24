import {Link} from 'react-router-dom';

export default function SpecialCard(props) {
  return (
    <article className="menu-card">
      <img src="https://via.placeholder.com/200" alt="Customer"></img>
      <section className="menu-card-content">
        <h3>Dish Name</h3>
        <span className='price'>price</span>
        <p>description</p>
        <Link className="link"to="/order">Order for Delivery ></Link>
      </section>
    </article>
  );
}
