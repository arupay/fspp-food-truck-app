function Stars({ num }) {
  return (
    <>
      <span
        className={
          num === 0
            ? "fa fa-star"
            : num > 0 && num < 1
            ? "fa fa-star-half-full"
            : "fa fa-star checked"
        }
      ></span>
      <span
        className={
          num > 1 && num < 2
            ? "fa fa-star-half-full"
            : num >= 2
            ? "fa fa-star checked"
            : "fa fa-star"
        }
      ></span>
      <span
        className={
          num > 2 && num < 3
            ? "fa fa-star-half-full"
            : num >= 3
            ? "fa fa-star checked"
            : "fa fa-star"
        }
      ></span>
      <span
        className={
          num > 3 && num < 4
            ? "fa fa-star-half-full"
            : num >= 4
            ? "fa fa-star checked"
            : "fa fa-star"
        }
      ></span>
      <span
        className={
          num > 4 && num < 5
            ? "fa fa-star-half-full"
            : num >= 5
            ? "fa fa-star checked"
            : "fa fa-star"
        }
      ></span>
    </>
  );
}

export default Stars;
