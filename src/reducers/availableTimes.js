import { fetchAPI } from '../utilities/fakeApi';

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

export function availableTimesReducer(state, action) {
  // Create the initial state for availableTimes
  state.availableTimes = initializeTimes();

  switch (action.type) {
    case 'date_changed': {
        const dt = new Date(action.payload.date);
        const updatedTimes = fetchAPI(dt);
        state.availableTimes = updatedTimes;
        return state;
      }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
