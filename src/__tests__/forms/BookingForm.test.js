import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import BookingForm from "../../components/forms/BookingForm";
describe('BookingForm', () => {
  const props = {
    date: '',
    time: '',
    guests: '',
    occasion: '',
    availableTimes: ['10:00', '12:00', '14:00'],
    onDate: jest.fn(),
    onTime: jest.fn(),
    onGuests: jest.fn(),
    onOccasion: jest.fn(),
    submitForm: jest.fn(),
  };

  test('it should render correctly', () => {
    render(<BookingForm {...props} />);
    const formElement = screen.getByTestId('booking-form');
    expect(formElement).toBeInTheDocument();
  });

  test('it should disable the submit button when the date and time are not selected', () => {
    render(<BookingForm {...props} />);
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });
    expect(submitButton).toBeDisabled();
  });

  test('it should enable the submit button when the date and time are selected', () => {
    const updatedProps = {
      ...props,
      date: '2023-05-05',
      time: '10:00',
    };
    render(<BookingForm {...updatedProps} />);
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });
    expect(submitButton).not.toBeDisabled();
  });

  test('it should update the date when the date input changes', () => {
    render(<BookingForm {...props} />);
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2023-05-05' } });
    expect(props.onDate).toHaveBeenCalledTimes(1);
  });

  test.skip('it should update the time when the time input changes', async () => {
    render(<BookingForm {...props} />);
    // Label text should start with "Choose time"
    const timeInput = screen.getByLabelText(/Choose time/);
    act(() => {
      fireEvent.change(timeInput, { target: { value: '10:00' } });
    })

    // await findByTestId('list');
    await waitFor(() => {
      expect(props.onTime).toHaveBeenCalledTimes(1);
    });
  });

  test('it should update the number of guests when the guests input changes', () => {
    render(<BookingForm {...props} />);
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '2' } });
    expect(props.onGuests).toHaveBeenCalledTimes(1);
  });

  test('it should update the occasion when the occasion input changes', () => {
    render(<BookingForm {...props} />);
    const occasionInput = screen.getByLabelText('Occasion');
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });
    expect(props.onOccasion).toHaveBeenCalledTimes(1);
  });

  test.skip('it should submit the form data when the submit button is clicked', () => {
    const updatedProps = {
      ...props,
      date: '2023-05-05',
      time: '10:00',
      guests: '2',
      occasion: 'Birthday',
    };
    render(<BookingForm {...updatedProps} />);
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });
    fireEvent.click(submitButton);
    expect(props.submitForm).toHaveBeenCalledTimes(1);
    expect(props.submitForm).toHaveBeenCalledWith(updatedProps);
  });
});
