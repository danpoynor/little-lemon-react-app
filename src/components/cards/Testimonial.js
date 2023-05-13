import Star from '../../assets/icons/star.png';

export default function TestimonialCard({ item }) {
  function RatingStars({ numStars }) {
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(<img src={Star} alt="star rating" className='star' key={i} />);
    }

    return stars;
  }

  return (
    <article className="testimonial-card">
      <h3>Rating</h3>
      <div className="profile">
        <div className="photo" style={{ backgroundImage: `url(${item.photo})` }}></div>
        <p>{item.name}</p>
      </div>

      <div className='rating'>
        <p>Rating info</p>
        <RatingStars numStars={item.rating} />
      </div>

      <p className="description">{item.review}</p>
    </article>
  );
}
