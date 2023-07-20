import Stars from "./Stars";

function ReviewStars({ average_score, total_reviews }) {
  average_score = average_score === null ? 0 : average_score;
  return (
    <>
      <Stars num={average_score} />
      <span id="reviews">
        {average_score > 0
          ? `${
              total_reviews > 1
                ? total_reviews + " reviews"
                : total_reviews + " review"
            }`
          : "No Reviews Yet"}
      </span>
    </>
  );
}

export default ReviewStars;
