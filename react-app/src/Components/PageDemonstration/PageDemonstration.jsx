import "./PageDemonstration.css";

function PageDemonstration(props) {
  return (
    <div className="page-demonstration">
      <span>{props.span1}</span>
      <span>{props.span2}</span>
      <span>{props.span3}</span><br/>
      {props.link}
    </div>
  );
}

export default PageDemonstration;
