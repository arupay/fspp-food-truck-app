import Stars from "./Stars";

function ReviewStars({ average_score, total_reviews }) {
  const ratingsCalc = (avg) => {
    let roundedDown = Math.floor(avg);
    if (isNaN(avg)) {
      return 0;
    }
    if (avg - roundedDown < 0.5) {
      return roundedDown;
    }
    return roundedDown + 0.5;
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
