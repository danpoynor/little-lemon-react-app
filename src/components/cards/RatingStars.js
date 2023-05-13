import Star from '../../assets/icons/star.png';

export default function RatingStars({ numStars }) {
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push(<img src={Star} alt="star rating" className='star' />);
  }

  return stars;
}
