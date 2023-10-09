import "./CartControl.css";
 import ButtonAddOrDeletProduct from "../ButtonAddOrDeletProduct/ButtonAddOrDeletProduct";

 
export default function CartControl(props) {
 
  return (
    <div className={["cartControl", props.displayNone].join(" ")}>
      <div className="cartControl_selectDeleteDiv">
        {props.markerSelect ? (
          ""
        ) : (
          <ButtonAddOrDeletProduct
            handleOnclick={props.handleOnClickSelektAll}
            value={"выбрать все"}
            marker={props.marker}
          />
        )}
        {props.markerDelete ? (
          ""
        ) : (
          <ButtonAddOrDeletProduct
            handleOnclick={props.handleOnclick}
            value={props.valueDelete??"удалить всё"}
            svg={"delete"}
          />
        )}
      </div>
      <div className="cartControl_selectProductDiv">
        <h2>
          выбранные товары{"  "}
          <span className="cartControl_selectProductSpan">
            ({props.amountProduct})
          </span>
        </h2>
      </div>
    </div>
  );
}
