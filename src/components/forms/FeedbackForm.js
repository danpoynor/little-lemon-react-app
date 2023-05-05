import { useState, useRef } from "react";

export default function FeedbackForm() {
  const [feedbackData, setFeedbackData] = useState({
    rating: "10",
    comment: "",
    isSubmitting: false,
    prompt: "Submit Feedback",
  });
  const ref = useRef(null);
  const isDisabled = Number(feedbackData.rating) < 5 && feedbackData.comment.length <= 10;

  const handleDialog = () => {
    ref.current.showModal();
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFeedbackData({
      ...feedbackData,
      isSubmitting: true,
      prompt: <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...</>,
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Pretend like the feedback was submitted
    setFeedbackData({
      ...feedbackData,
      isSubmitting: false,
      prompt: "Feedback Submitted Successfully",
    });

    await new Promise(resolve => setTimeout(resolve, 3000));

    // Reset feedback form before closing the dialog
    setFeedbackData({
      score: "10",
      comment: "",
      isSubmitting: false,
      prompt: "Submit Feedback",
    });
    ref.current.close();
  }

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";

  // If the score is less than or equal to 5, a comment
  // of at least 5 characters is required.
  return (
    <>
      <button
        onClick={handleDialog}
        className="btn btn-feedback"
        title="Submit Feedback"
      >
        Submit Feedback
      </button>
      <dialog ref={ref} className="feedback-dialog">
        <div className="feedback-header">
          <h2>Please Rate You Experience</h2>
          <form method='dialog'>
            <button
              title='Close dialog'
              aria-label="Close dialog"
              onClick={() => {
                ref.current.close();
              }}
            >
              <svg viewBox="0 0 10 10" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.286,2.267a.733.733,0,0,0,0-1.035L8.768.714a.733.733,0,0,0-1.035,0L5,3.447,2.267.714a.733.733,0,0,0-1.035,0l-.518.518a.733.733,0,0,0,0,1.035L3.447,5,.714,7.733a.733.733,0,0,0,0,1.035l.518.518a.733.733,0,0,0,1.035,0L5,6.553,7.733,9.286a.733.733,0,0,0,1.035,0l.518-.518a.733.733,0,0,0,0-1.035L6.553,5Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
        <form
          className="form"
          onSubmit={handleSubmit}
          data-testid="feedback-form"
        >
          <fieldset>
            <div className="field-wrapper">
              <label htmlFor="rating">Score: {feedbackData.rating} ⭐️</label>
              <input
                type="range"
                id="rating"
                min="0"
                max="10"
                name="rating"
                value={feedbackData.rating || 10}
                onChange={(e) => {handleFeedbackChange(e)}}
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="comment">Comments:</label>
              <textarea
                id="comment"
                rows="6"
                maxLength="500"
                placeholder={textAreaPlaceholder}
                name="comment"
                value={feedbackData.comment}
                onChange={(e) => {handleFeedbackChange(e)}}
              />
            </div>
            <div className="field-wrapper">
              <button
                type="submit"
                className="btn"
                disabled={isDisabled}
                name="submit-btn"
                data-testid="feedback-form-submit-btn"
              >
                {feedbackData.prompt}
              </button>
            </div>
          </fieldset>
        </form>
      </dialog>
    </>
  )
}
