export default function BookingForm(props) {

  function handleDate(e) {
    props.onDate(e.target)
  }

  function handleTime(e) {
    props.onTime(e.target)
  }

  function handleGuests(e) {
    props.onGuests(e.target)
  }

  function handleOccasion(e) {
    props.onOccasion(e.target)
  }

  return (
    <form className="form" action="/reservations/confirmation">
      <fieldset>

        <div className="field-wrapper">
          <label htmlFor="res-date">Choose date</label>
          <input
            required
            type="date"
            id="res-date"
            value={props.date}
            onChange={handleDate}
          />
        </div>

        <div className="field-wrapper">
          <label htmlFor="res-time">Choose time</label>
          <select
            required
            id="res-time"
            value={props.time}
            onChange={handleTime}
          >
            {props.availableTimes.map((time, index) => {
              return (
                <option key={index} value={time}>
                  {time}
                </option>
              )
            })}
          </select>
        </div>

        <div className="field-wrapper">
          <label htmlFor="guests">Number of guests</label>
          <input
            required
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={props.guests}
            onChange={handleGuests}
          />
        </div>

        <div className="field-wrapper">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion"
            value={props.occasion}
            onChange={handleOccasion}
          >
            <option value="">Select...</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div className="field-wrapper">
          <input type="submit" value="Make Your Reservation" className="btn" />
        </div>

      </fieldset>
    </form>
  )
}
