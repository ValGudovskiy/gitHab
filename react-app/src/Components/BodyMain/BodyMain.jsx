import "./BodyMain.css";

function BodyMain(props) {
  return (
    <main className="main">
      {props.contentMain1}
      <div className="main__specification">{props.contentDiv}</div>
      {props.contentMain2}
    </main>
  );
}

export default BodyMain;
