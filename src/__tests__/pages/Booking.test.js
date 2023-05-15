import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import BookingPage from "../../pages/Booking";

describe('BookingPage component', () => {
  // After each test, reset the form
  afterEach(() => {
    screen.getByTestId('booking-form').reset();
  });

  test('it renders', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const formElement = screen.getByTestId('booking-form');
    expect(formElement).toBeInTheDocument();
  });

  test('it renders the expected `<H1>` heading', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const main_heading = screen.getByRole('heading', {level: 1})
    expect(main_heading).toBeInTheDocument();
    expect(main_heading).toHaveTextContent('Reserve a table');
  });

  test('it should render all form fields', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Make Your Reservation' })).toBeInTheDocument();
  });

  test('it should have expected initial form values', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('booking-form')).toHaveFormValues({ date: '' }) // empty value
    expect(screen.getByTestId('booking-form')).toHaveFormValues({ time: undefined }) // empty value
    expect(screen.getByTestId('booking-form')).toHaveFormValues({ guests: 2 }) // empty value
    expect(screen.getByTestId('booking-form')).toHaveFormValues({ occasion: '' }) // empty value
  });

  test('it should validate required fields', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    // Set number of guests to an invalid value
    const numberOfGuests = screen.getByLabelText('Number of guests');
    numberOfGuests.value = '';

    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });
    fireEvent.click(submitButton);
    expect(screen.getByLabelText('Choose date')).toBeInvalid();
    expect(screen.getByLabelText('Choose time')).toBeInvalid();
    expect(screen.getByLabelText('Number of guests')).toBeInvalid();
  });

  test.skip('it should be able to type into Date input', () => {
    const futureDate = '2023-10-10'
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const bookingForm = screen.getByTestId('booking-form')
    const inputElement = screen.getByLabelText(/Choose date/i)
    fireEvent.click(inputElement)

    fireEvent.change(inputElement, { target: { value: futureDate } })

    expect(bookingForm).toHaveFormValues({ date: futureDate })
  });

  it('should validate maximum and minimum number of guests', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '11' } });
    expect(guestsInput).toBeInvalid();
    fireEvent.change(guestsInput, { target: { value: '0' } });
    expect(guestsInput).toBeInvalid();
  });

  it.skip('should update available times when date is changed', () => {
    // Date notes:
    // 2023-06-8 is a Thursday, reservations start at 17:00
    // 2023-06-10 is a Saturday, reservations start at 10:00
    // 2023-06-12 is a Monday, reservations start at 17:00

    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');

    // Expect weekday hours start at 17:00
    fireEvent.change(dateInput, { target: { value: '2023-06-08' } });
    expect(timeSelect).toHaveDisplayValue('17:00');

    // Expect weekend hours start at 10:00
    fireEvent.change(dateInput, { target: { value: '2023-06-10' } });
    expect(timeSelect).toHaveDisplayValue('10:00');

    // Expect re-selecting a weekday date to start time at 17:00
    fireEvent.change(dateInput, { target: { value: '2023-06-12' } });
    expect(timeSelect).toHaveDisplayValue('17:00');
  });


  it.skip('should submit the form with valid data', () => {
    const handleSubmit = jest.fn();
    // const onSubmit = jest.fn();
    render(
      <BrowserRouter>
        <BookingPage handleSubmit={handleSubmit} />
      </BrowserRouter>
    );
    const bookingForm = screen.getByTestId('booking-form')
    bookingForm.reset();

    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

    fireEvent.change(dateInput, { target: { value: '2023-06-01' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    // fireEvent.click(submitButton);
    // fireEvent.submit(bookingForm);
    // bookingForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      date: '2023-06-01',
      time: '18:00',
      guests: '4',
      occasion: 'Anniversary',
    });
  });

});
