import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ConfirmedBookingPage from "../../pages/Booking/ConfirmedBooking";

describe('ConfirmedBookingPage component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <ConfirmedBookingPage />
      </BrowserRouter>
    );
  });

  test('it renders the expected `<H1>` heading', () => {
    render(
      <BrowserRouter>
        <ConfirmedBookingPage />
      </BrowserRouter>
    );
    const main_heading = screen.getByRole('heading', {level: 1})
    expect(main_heading).toBeInTheDocument();
    expect(main_heading).toHaveTextContent('Your Reservation is Confirmed!');
  });
});
