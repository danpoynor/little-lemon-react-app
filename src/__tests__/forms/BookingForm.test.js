import { render, screen } from "@testing-library/react";
import BookingForm from "../../components/forms/BookingForm";

describe('BookingForm component', () => {
  test('it renders', () => {
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]} />);
    expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
  });
});
