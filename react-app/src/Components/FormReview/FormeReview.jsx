import React, { useState } from "react";
import ButtonLikeOrCartOrProfilOrText from "../ButtonLikeOrCartOrProfilOrText/ButtonLikeOrCartOrProfilOrText";
import "./FormReview.css";

const FormReview = () => {
  let [changeUserNameValue, setChangeUserName] = useState(
    localStorage.getItem("username") || ""
  );
  let [changeEstimationValue, setChangeEstimation] = useState(
    localStorage.getItem("estimation") || ""
  );

  let [changeReviewValue, setChangeReview] = useState(
    localStorage.getItem("review") || ""
  );

  let handelChangeUserName = (e) => {
    setChangeUserName(e.target.value);
  };
  let handelChangeEstimation = (e) => {
    setChangeEstimation(e.target.value);
  };
  let handelChangeReview = (e) => {
    setChangeReview(e.target.value);
  };
  let [errorsUseName, setValidUseName] = useState("");
  let [errorsEstimation, setValidEstimation] = useState("");

  function handelStorageFormInput(e) {
    localStorage.setItem(e.target.id, e.target.value);
  }

  function removeLocalStorageInput(x) {
    localStorage.removeItem(x);
  }
  let handelOnclick = (e) => {
    setValidUseName("");
    setValidEstimation("");
  };

  let handelSubmit = (e) => {
    e.preventDefault();

    setValidUseName("");
    setValidEstimation("");
    if (!e.target[1].value.trim()) {
      setValidUseName(
        (errorsUseName = (
          <div className="reviews-block__error">поле не заполнено</div>
        ))
      );
      return;
    }
    if (e.target[1].value.length < 2) {
      setValidUseName(
        <div className="reviews-block__error">введено меньше 2-х символов</div>
      );
      return;
    }
    setValidUseName("");
    if (!e.target[2].value.trim()) {
      setValidEstimation(
        <div className="reviews-block__error">поле не заполнено</div>
      );
      return;
    }
    if (e.target[2].value / 1 !== +e.target[2].value) {
      setValidEstimation(
        <div className="reviews-block__error">в поле введены буквы</div>
      );
      return;
    }
    if (e.target[2].value > 5 || e.target[2].value < 1) {
      setValidEstimation(
        <div className="reviews-block__error">
          ввели цифры больше 5 или меньше 1
        </div>
      );
      return;
    }
    e.target.submit();
    alert("Ваш отзыв принят!");
    removeLocalStorageInput("username");
    removeLocalStorageInput("estimation");
    removeLocalStorageInput("review");
  };

  return (
    <form
      className="reviews-block__forme "
      onSubmit={handelSubmit}
      onClick={handelOnclick}
      onInput={handelStorageFormInput}
    >
      <fieldset className="reviews-block__fieldset">
        <legend className="reviews-block__legend">
          <h3 className="reviews-block__title-h3">Добавить свой отзыв</h3>
        </legend>

        <div className="reviews-block__div-user">
          <label
            htmlFor="username"
            className="reviews-block__label reviews-block__label_username"
          >
            <input
              onChange={handelChangeUserName}
              value={changeUserNameValue}
              className="reviews-block__input reviews-block__input_username"
              type="text"
              id="username"
              name="username"
              placeholder="Имя и фамилия"
            />
            {errorsUseName}
          </label>

          <label
            htmlFor="estimation"
            className="reviews-block__label reviews-block__label_estimation"
          >
            <input
              onChange={handelChangeEstimation}
              value={changeEstimationValue}
              className="reviews-block__input reviews-block__input_estimation"
              id="estimation"
              name="estimation"
              placeholder="Оценка"
            />
            <div className="reviews-block__errorUseName">
              {errorsEstimation}
            </div>
          </label>
        </div>

        <div className="reviews-block__div-user">
          <label
            htmlFor="review"
            className="reviews-block__lable reviews-block__label_review"
          >
            <textarea
              onChange={handelChangeReview}
              value={changeReviewValue}
              className=" reviews-block__textarea"
              id="review"
              name="review"
              placeholder="Текст отзыва"
            ></textarea>
          </label>
        </div>
      </fieldset>

      <fieldset className="reviews-block__fieldset">
        <ButtonLikeOrCartOrProfilOrText classBtn={"reviews-block__btn"} contentBtn={"Добавить отзыв"} />
      </fieldset>
    </form>
  );
};

export default FormReview;
