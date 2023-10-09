import "./Review.css";
import Zvezda from "../ZvezdaForReview/Zvezda";

function Review(props) {
  return (
    <>
      <div key={props.keyDiv}>
        <section className="reviews-block__section">
          <div className="reviews-block__photo">
            <img
              className="reviews-block__photo-man"
              src={props.srcImg}
              alt={props.altImg}
            />
          </div>
          <div className="reviews-block__main">
            <h3 className="reviews-block__name-h3">
              {props.contentUserNameH3}
            </h3>
              <Zvezda ratingZV={props.contentZvezdaDiv}
               classSvg={'reviews-block__img-zv'}
               classDiv={'reviews-block__img-zvezda'}
               />
            
            <p className="reviews-block__p reviews-block__usageExperience">
              <b>Опыт использования:</b> {props.contentUsageExperienceP}
            </p>

            <p className="reviews-block__p">
              <b>Достоинства:</b>
              <br />
              {props.contentDignitiesP}
            </p>

            <p className="reviews-block__p">
              <b>Недостатки:</b>
              <br />
              {props.contentDrawback}
            </p>
          </div>
        </section>
      </div>
      <hr className="reviews-block__hr" />
    </>
  );
}

export default Review;
