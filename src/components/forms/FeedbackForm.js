import { useState, useEffect, useRef } from "react";

export default function FeedbackForm({ onSubmit }) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const ref = useRef(null);

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback"

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score, comment});
  }

  const handleDialog = () => {
    ref.current.showModal();
  }

  // If the score is less than or equal to 5, a comment
  // of at least 5 characters is mandatory.
  return (
    <>
      <button
        onClick={handleDialog}
        className="btn btn-feedback"
      >
        Submit Feedback
      </button>

      <dialog
        ref={ref}
        className="feedback-dialog"
      >

        <div className="feedback-header">
          <h2>Please Rate You Experience</h2>
          <form method='dialog'>
            <button title='Close dialog'>
              <svg viewBox="0 0 10 10" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.286,2.267a.733.733,0,0,0,0-1.035L8.768.714a.733.733,0,0,0-1.035,0L5,3.447,2.267.714a.733.733,0,0,0-1.035,0l-.518.518a.733.733,0,0,0,0,1.035L3.447,5,.714,7.733a.733.733,0,0,0,0,1.035l.518.518a.733.733,0,0,0,1.035,0L5,6.553,7.733,9.286a.733.733,0,0,0,1.035,0l.518-.518a.733.733,0,0,0,0-1.035L6.553,5Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <div className="field-wrapper">
              <label htmlFor="rating">Score: {score} ⭐️</label>
              <input
                type="range"
                id="rating"
                min="0"
                max="10"
                value={score}
                onChange={(e) => {
                  setScore(e.target.value)
                }}
              />
            </div>

            <div className="field-wrapper">
              <label htmlFor="comment">Comments:</label>
              <textarea
                id="comment"
                rows="6"
                placeholder={textAreaPlaceholder}
                name="comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </div>

            <div className="field-wrapper">
              <button type="submit" className="btn" disabled={isDisabled}>
                Submit Feedback
              </button>
            </div>

          </fieldset>
        </form>
      </dialog>
    </>
  )
}
