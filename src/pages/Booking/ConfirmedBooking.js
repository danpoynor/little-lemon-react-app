import { useLocation } from 'react-router-dom';

export default function ConfirmedBooking() {
  const { state } = useLocation();
  const { date, time, guests, occasion, seatingPreference } = state || {};
  console.log('state', state);

  const formattedDate = new Date(date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", timeZone: 'UTC'})

  const details = `${guests} ${
    guests > 1 ? 'people' : 'person'
  } on ${formattedDate} at ${time}${
    occasion ? ` for occasion ${occasion}` : ''
  } ${seatingPreference ? `with ${seatingPreference} seating preference` : ''}`

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Your Reservation is Confirmed!</h1>
        </div>
        <div className="page-content">
          <p>Your reservation for <strong>{details}</strong> has been confirmed.</p>
          <p>Thanks for dining with us!</p>
        </div>
      </div>
    </div>
  )
}
