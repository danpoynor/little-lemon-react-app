import { useState } from "react";

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
  const [reservationData, setReservationData] = useState({
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    isSubmitting: false,
    prompt: "Make Your Reservation",
  });

  // Disable the submit button if the date or time have no value.
  const isDisabled = !date || !time;

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setReservationData({
      ...reservationData,
      isSubmitting: true,
      prompt: <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...</>,
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    submitForm(reservationData);
  }

  return (
    <form className="form" onSubmit={handleSubmit} data-testid="booking-form">
      <fieldset name="reservation-fieldset">

        <div className="field-wrapper">

          <label htmlFor="date">Choose date</label>
          <input
            id="date"
            name="date"
            onChange={(e) => {handleReservationChange(e); onDate(e.target)}}
            required
            type="date"
          />
        </div>

        <div className="field-wrapper">
          <label htmlFor="time">Choose time{availableTimes.length ? `: ${availableTimes.length} seatings available` : ''}</label>
          <select
            id="time"
            name="time"
            onChange={(e) => {handleReservationChange(e); onTime(e.target)}}
            required
            value={reservationData.time}
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
            onChange={(e) => {handleReservationChange(e); onGuests(e.target)}}
            placeholder="1"
            required
            type="number"
            value={reservationData.guests}
          />
        </div>

        <div className="field-wrapper">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={(e) => {handleReservationChange(e); onOccasion(e.target)}}
            value={reservationData.occasion}
          >
            <option value="">Select...</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div className="field-wrapper">
          <button
            type="submit"
            className="btn"
            disabled={isDisabled}
            name="submit-btn"
            data-testid="feedback-form-submit-btn"
          >
            {reservationData.prompt}
          </button>
        </div>

      </fieldset>
    </form>
  )
}
