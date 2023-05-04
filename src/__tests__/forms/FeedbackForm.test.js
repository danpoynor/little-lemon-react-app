import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "../../components/forms/FeedbackForm";

describe("Feedback Form component", () => {
  afterEach(() => {
    screen.getByTestId('feedback-form').reset();
  });

  test('it renders', () => {
    render(<FeedbackForm />);
    expect(screen.getByText('Please Rate You Experience')).toBeInTheDocument();
  });

  test("should render a submit button", () => {
    render(<FeedbackForm />);
    const submitButton = screen.getByRole("button", { name: /submit feedback/i });
    expect(submitButton).toBeInTheDocument();
  });

  test.skip("it should render a dialog when the submit button is clicked", () => {
    render(<FeedbackForm />);
    const submitButton = screen.getByRole("button", { name: /submit feedback/i });
    fireEvent.click(submitButton);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  test.skip("should render a score range input", () => {
    render(<FeedbackForm />);
    const scoreInput = screen.getByRole("slider", { name: /score/i });
    expect(scoreInput).toBeInTheDocument();
  });

  test.skip("it should render a comments textarea", () => {
    render(<FeedbackForm />);
    const commentsTextarea = screen.getByRole("textbox", { name: /comments/i });
    expect(commentsTextarea).toBeInTheDocument();
  });

  test("it should disable submission if score is lower than 5 and there is no feedback", () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForm />);

    const rangeInput = screen.getByLabelText(/^Score:/);
    fireEvent.change(rangeInput, { target: { value: "4" } })

    const submitButton = screen.getByTestId('feedback-form-submit-btn')
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

   test.skip("it should enable the submit button when the score is 5 or greater and the comment is at least 10 characters", () => {
    render(<FeedbackForm />);
    const submitButton = screen.getByTestId("feedback-form-submit-btn");
    const scoreInput = screen.getByRole("slider", { name: /score/i });
    const commentsTextarea = screen.getByRole("textbox", { name: /comments/i });

    fireEvent.change(scoreInput, { target: { value: "5" } });
    fireEvent.change(commentsTextarea, { target: { value: "long enough" } });

    expect(submitButton).toBeEnabled();
  });

  test.skip("it should display a dialog with the correct header and close button", () => {
    render(<FeedbackForm />);
    const submitButton = screen.getByRole("button", { name: /submit feedback/i });
    fireEvent.click(submitButton);
    const header = screen.getByRole("heading", { name: /please rate your experience/i });
    expect(header).toBeInTheDocument();
    const closeButton = screen.getByLabelText(/close dialog/i);
    expect(closeButton).toBeInTheDocument();
  });

  test.skip("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm />);

    const rangeInput = screen.getByLabelText(/Score:/)
    fireEvent.change(rangeInput, { target: { value: score } });

    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByTestId('feedback-form-submit-btn')
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test.skip("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: ""
    });
  });
});
