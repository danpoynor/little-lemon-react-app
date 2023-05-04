import { useState, useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import BookingForm from "../components/forms/BookingForm";
import { availableTimesReducer } from "../reducers/availableTimes";
import { submitAPI } from "../utilities/fakeApi.js";

export default function Booking({ times }) {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [state, dispatch] = useReducer(availableTimesReducer, {
    date: "",
    availableTimes: []
  })
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState();
  const navigate = useNavigate();

  // Create a function named updateTimes which will handle the state change.
  // This function will change the availableTimes based on the selected date.
  // Using async/await so the times are rerendered after the state is updated.
  async function updateTimes (target) {
    // Include the newly selected date in the dispatch state parameter
    state.date = target.value;

    // dispatch to the availableTimesReducer
    // which uses initializeTimes() to set an initial availableTimes state
    // and then uses fetchAPI() to update the availableTimes state
    await dispatch({ type: "date_changed", payload: state });
    setAvailableTimes(state.availableTimes);
  }

  function timeHandler(target) {
    setTime(target.value)
  }

  function guestsHandler(target) {
    setGuests(target.value)
  }

  function occasionHandler(target) {
    setOccasion(target.value)
  }

  function submitForm(data) {
    if (submitAPI) {
      navigate('/reservations/confirmation', { state: data });
    }
  }

  return (
    <div className="page reservations">
      <div className="container">
        <div className="page-header">
          <h1>Reserve a table</h1>
          <p>Have a wonderful time dining at our restaurant with your friends and family.</p>
        </div>

        <div className="page-content">

          <BookingForm
            date={state.date}
            onDate={updateTimes}
            availableTimes={state.availableTimes}
            time={time}
            onTime={timeHandler}
            guests={guests}
            onGuests={guestsHandler}
            occasion={occasion}
            onOccasion={occasionHandler}
            submitForm={submitForm}
          />

          <div className="reservation-details">
            <h3>Your Reservation Details:</h3>
            <ul className="reservation-details-list">
              <li><svg width="20" height="20" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calendar Icon">
                <g transform="translate(-2 -3)" fill="none" fillRule="evenodd">
                  <path d="M0 0h23.914591v24H0z"></path>
                <rect stroke="#333" strokeWidth="2" x="3.989324" y="6" width="15.935943" height="14" rx="2"></rect>
                <path fill="#333" d="M2.989324 9h17.935943v2H2.989324z"></path>
                <rect fill="#333" x="6.975089" y="3" width="1.992883" height="4" rx="0.996441"></rect>
                <rect fill="#333" x="14.946619" y="3" width="1.992883" height="4" rx="0.996441"></rect>
                </g>
                </svg>Date: {state.date}</li>
              <li><svg width="20" height="20" viewBox="3 3 18 18" xmlns="http://www.w3.org/2000/svg" fill="#333" role="img" aria-label="Clock Icon">
                <path d="M13 11h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11zm-1 10a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path>
                </svg> Time: {time}</li>
              <li><svg width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" data-test="icPerson" role="img" aria-label="Person Icon">
                <g fill="none" fillRule="evenodd"><path d="M-3-3h24v24H-3z"></path>
                <g transform="translate(1 1)" stroke="#333" strokeWidth="2">
                  <path d="M15.570692 14.739444C14.523244 10.858251 12.074936 9 8 9 3.925059 9 1.476751 10.858254.429308 14.739446c-.143896.53321.1717 1.082114.704904 1.226013A.99999.99999 0 0 0 1.394764 16l13.21047-.000001c.552284 0 .999999-.447715.999999-.999999a.999997.999997 0 0 0-.034541-.260556z"></path>
                  <rect x="4" width="8" height="8" rx="4"></rect>
                  </g>
                  </g>
                  </svg> Number of diners: {guests}</li>
              <li>Occasion: {occasion}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
