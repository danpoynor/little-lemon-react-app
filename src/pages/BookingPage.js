import { useState, useReducer } from "react";
import BookingForm from "../components/forms/BookingForm";

const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

function timeReducer(state: FormState, action: Action) {
  switch (action.type) {
    case 'date_changed' : {
      // Update hours for reservations depending on selected day of week.
      // Friday (4) or Saturday (5), 10am to 11pm for lunch and dinner.
      // Other days are from 5pm to 10pm (initial values) for dinner only.
      const dt = new Date(action.payload);
      const dayOfWeek = dt.getDay();

      if (dayOfWeek && dayOfWeek === 4 || dayOfWeek === 5) {
        return {
          date: action.payload,
          availableTimes: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]}
      } else {
        return {
          date: action.payload,
          availableTimes: initializeTimes};
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function BookingPage({ times }) {
  const [state, dispatch] = useReducer(timeReducer, {
    date: "",
    availableTimes: []
  })
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState();

  function dateHandler(target) {
    setTime();
    dispatch({
      type: 'date_changed',
      payload: target.value
    });
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
            onDate={dateHandler}
            availableTimes={state.availableTimes}
            time={state.time}
            onTime={timeHandler}
            guests={guests}
            onGuests={guestsHandler}
            occasion={occasion}
            onOccasion={occasionHandler}
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
