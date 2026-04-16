import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

function Rating({
  heading = "Rate your experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (rating > 0) {
      setSubmitted(true);
    }
  }

  function closeModal() {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  }

  return (
    <>
      <div className="rating-container">
        <h2>{heading}</h2>
        <div className="stars">
          {stars.map((star) => (
            <Star
              key={star}
              value={star}
              hover={hover}
              rating={rating}
              hoverEnter={setHover}
              hoverLeave={() => setHover(null)}
              ratingClicked={setRating}
              color={color}
            />
          ))}
        </div>
        {rating > 0 && (
          <p className="feedback">
            {feedbackMessages[rating - 1] ?? "No feedback available"}
          </p>
        )}
        <Button
          className={"submit-btn"}
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Submit
        </Button>
      </div>
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </>
  );
}

export default Rating;
