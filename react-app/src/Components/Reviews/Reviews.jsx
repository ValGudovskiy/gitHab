import "./Reviews.css";
import arrAddReviews from "../../arrays&obj/ArrAddReviews";
import Review from "../Review/Review";
const arrReviews = arrAddReviews();

function Reviews() {
  return (
    <>
      <div className="reviews-block__title">
        <div className="reviews-block__head">
          <h2 className="reviews-block__title-h2">Отзывы</h2>
          <span className="reviews-block__span">{arrReviews.length}</span>
        </div>
      </div>
      <div className="reviews-block__all-section">
        {arrReviews.map((reviews) => (
          <Review
            key={reviews.id}
            srcImg={reviews.srcMen}
            altImg={reviews.altMen}
            contentUserNameH3={reviews.userName}
            contentZvezdaDiv={reviews.rating}
            contentUsageExperienceP={reviews.usageExperience}
            contentDignitiesP={reviews.dignities}
            contentDrawback={reviews.drawback}
          />
        ))}
      </div>
    </>
  );
}

export default Reviews;
