import Stars from "./Stars";

function ReviewStars({ average_score, total_reviews }) {
  const ratingsCalc = (rating) => {
    const num = parseFloat(rating);
    const rounded = Math.round(num * 2) / 2;
    return rounded;
  };
  return (
    <>
      <Stars num={ratingsCalc(average_score)} />
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
