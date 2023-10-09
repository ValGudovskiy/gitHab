import "./Nav.css";
import { Link } from "react-router-dom";
function Nav(props) {
 
  return (
    <nav id="up" className="bread-crumbs">
      <span className="bread-crumbs__span">
        <Link className="bread-crumbs__link-a" to={"/" + props.element.id}>
          {props.element.name}
        </Link>
        <b> {props.index===props.length-1?'':">"} </b>
       </span>
    </nav>
  );
}

export default Nav;
