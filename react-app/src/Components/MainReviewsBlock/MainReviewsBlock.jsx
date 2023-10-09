import Reviews from "../Reviews/Reviews";
import FormReview from "../FormReview/FormeReview";
import "./MainReviewsBlock.css";


function MainReviewsBlock() {
  return (
    <article className="reviews-block">
      <Reviews/>
      <div className="reviews-block__add-review">
        <input
          type="checkbox"
          className="reviews-block__input_btn"
          id="checkbox"
          name="checkbox"
          value="yes"
        />
        <label
          htmlFor="checkbox"
          className="reviews-block__btn_label reviews-block__btn"
        >
          Добавить отзыв
        </label>
        <FormReview/>
      </div>
    </article>
  );
}

export default MainReviewsBlock;
