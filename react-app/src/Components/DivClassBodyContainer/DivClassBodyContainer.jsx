import "./DivClassBodyContainer.css";

function DivClassBodyContainer(props) {
  return <div className={"body__container " + props.className}>{props.content}</div>;
}

export default DivClassBodyContainer;
