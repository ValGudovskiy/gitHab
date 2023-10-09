import "./ColorButton.css";

function ColorButton1(props) {
  return (
    <div className={"button-1 " + props.classBtn} onClick={props.onClickBtn}>
      {props.contentDiv}
      <img
        src={props.srcImg}
        alt={props.altImg}
        className={props.classImg}
      ></img>
    </div>
  );
}

export default ColorButton1;
