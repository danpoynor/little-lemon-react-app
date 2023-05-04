export default function BookingForm({
  date,
  time,
  guests,
  occasion,
  availableTimes,
  onDate,
  onTime,
  onGuests,
  onOccasion,
  submitForm,
}) {
  // Disable the submit button if the date and time are not selected.
  const isDisabled = !date || !time;

  function handleDate(event) {
    onDate(event.target)
  }

  function handleTime(event) {
    onTime(event.target)
  }

  function handleGuests(event) {
    onGuests(event.target)
  }

  function handleOccasion(event) {
    onOccasion(event.target)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    submitForm(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit} data-testid="booking-form">
      <fieldset name="reservation-fieldset">

        <div className="field-wrapper">

          <label htmlFor="date">Choose date</label>
          <input
            id="date"
            name="date"
            onChange={handleDate}
            required
            type="date"
          />
        </div>

        <div className="field-wrapper">
          <label htmlFor="time">Choose time{availableTimes.length ? `: ${availableTimes.length} seatings available` : ''}</label>
          <select
            id="time"
            name="time"
            onChange={handleTime}
            required
            value={time}
          >
            {availableTimes.map((time, index) => {
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
            id="guests"
            max="10"
            min="1"
            name="guests"
            onChange={handleGuests}
            placeholder="1"
            required
            type="number"
            value={guests}
          />
        </div>

        <div className="field-wrapper">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={handleOccasion}
            value={occasion}
          >
            <option value="">Select...</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div className="field-wrapper">
          <input type="submit" disabled={isDisabled} value="Make Your Reservation" className="btn" name="submit-btn" />
        </div>

      </fieldset>
    </form>
  )
}
