import Star from '../../assets/icons/star.png';

export default function TestimonialCard(props) {
  return (
    <article className="testimonial-card">
      <h3>Rating</h3>
      <div className="testimonial-card-profile">
        <img src="https://via.placeholder.com/64" alt="Customer"></img>
        <p>Name</p>
      </div>
      <p className='rating-info'>Rating info</p>
      <img src={Star} alt="star rating" className='star' />
      <img src={Star} alt="star rating" className='star' />
      <img src={Star} alt="star rating" className='star' />
    </article>
  );
}
