import "./FormAuthOrRegist.css";
import { useEffect, useState } from "react";
import creatTextOfInputInP from "../myFunctions/creatTextOfInputInP";
 
// let arrInputs = [
//   { name: " ", type: " " },
//   { name: " ", type: " " },
//   { name: " ", type: " " },
//   { name: " ", type: " " },
//   { name: " ", type: " " },
//   { name: " ", type: " " },
//  ],
/**
 *
 * @param  props: {arrInputs, nameBtn, marker, contentTop, creatTextInput{true}, onClickBtn, heandleOnclickGoIn(), contentBottom}
 * @returns
 */
export default function FormAuthOrRegistr(props) {
  let [marker, setMarker] = useState(false);
  useEffect(() => setMarker(props.marker), [props.marker]);
   const objValueInputs = {};
  return (
    <div className={"formAuthOrRegist " + props.classDivJoint}>
      {props.contentTop}
      <form id={"authOrRegist-" + props.nameBtn}>
        {marker
          ? props.arrInputs.map(
              (
                el // <= arrInputs
              ) => (
                <label className="formAuthOrRegist__label" key={el.name}>
                  {el.name + ": "}
                  <input
                    className="formAuthOrRegist__input"
                    onChange={(event) => {
                      objValueInputs[el.name] = event.target.value;
                      if (props.creatTextInP)
                        //функция передаёт параметры <input> в <p>
                        creatTextOfInputInP(event, objValueInputs);
                    }}
                    id={el.naim}
                    type={el.type}
                    name={el.name}
                  ></input>
                </label>
              )
            )
          : ""}
        <p>{/* вывод из input */}</p>
        <button
          className="formAuthOrRegist__button1"
          onClick={(event) => {
            event.preventDefault();
            if (props.onClickBtn) props.onClickBtn();
            if (marker) {
              props.heandleOnclickGoIn(event, objValueInputs);
            } else {
              setMarker(true);
            }
          }}
        >
          {props.nameBtn}
        </button>
      </form>
      <br />
      {props.contentBottom}
    </div>
  );
}
