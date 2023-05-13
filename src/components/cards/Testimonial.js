import RatingStars from "./RatingStars";

export default function TestimonialCard({item}) {
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

      {/* Truncated review */}
      {/* <p>{item.review.substring(0, 100)}...</p> */}

      <p className="description">{item.review}</p>
    </article>
  );
}
