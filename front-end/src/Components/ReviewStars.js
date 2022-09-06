import Stars from "./Stars";

function ReviewStars({ newReviews }) {
  const ratingsCalc = (reviews) => {
    const avg =
      reviews.reduce((r, { rating }) => r + Number(rating), 0) / reviews.length;
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
      <Stars num={ratingsCalc(newReviews)} />
      <span id="reviews">
        {newReviews.length ? `${newReviews.length} reviews` : "No Reviews Yet"}
      </span>
    </>
  );
}

export default ReviewStars;
