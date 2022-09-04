function ReviewStars({ newReviews }) {
  const ratingsCalc = (reviews) => {
    const avg =
      reviews.reduce((r, { rating }) => r + Number(rating), 0) / reviews.length;
    let roundedDown = Math.floor(avg);
    if (avg - roundedDown < 0.5) {
      return roundedDown;
    }
    return roundedDown + 0.5;
  };

  return (
    <>
      {isNaN(ratingsCalc(newReviews)) ? (
        <>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span id="reviews">No Reviews Yet</span>
        </>
      ) : (
        <>
          <span
            className={
              ratingsCalc(newReviews) === 0
                ? "far fa-star"
                : ratingsCalc(newReviews) > 0 && ratingsCalc(newReviews) < 1
                ? "fa fa-star-half-full"
                : "fa fa-star checked"
            }
          ></span>
          <span
            className={
              ratingsCalc(newReviews) > 1 && ratingsCalc(newReviews) < 2
                ? "fa fa-star-half-full"
                : ratingsCalc(newReviews) >= 2
                ? "fa fa-star checked"
                : "fa fa-star"
            }
          ></span>
          <span
            className={
              ratingsCalc(newReviews) > 2 && ratingsCalc(newReviews) < 3
                ? "fa fa-star-half-full"
                : ratingsCalc(newReviews) >= 3
                ? "fa fa-star checked"
                : "fa fa-star"
            }
          ></span>
          <span
            className={
              ratingsCalc(newReviews) > 3 && ratingsCalc(newReviews) < 4
                ? "fa fa-star-half-full"
                : ratingsCalc(newReviews) >= 4
                ? "fa fa-star checked"
                : "fa fa-star"
            }
          ></span>
          <span
            className={
              ratingsCalc(newReviews) > 4 && ratingsCalc(newReviews) < 5
                ? "fa fa-star-half-full"
                : ratingsCalc(newReviews) >= 5
                ? "fa fa-star checked"
                : "fa fa-star"
            }
          ></span>
          <span id="reviews">
            {newReviews.length
              ? `${newReviews.length} reviews`
              : "No Reviews Yet"}
          </span>
        </>
      )}
    </>
  );
}

export default ReviewStars;
