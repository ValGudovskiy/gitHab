import "./SimpleCardProduct.css";
import { Link } from "react-router-dom";

export default function SimpleCardProduct(props) {
  return (
    <div id={props.id} className="simpleCardProduct_containerCard">
      <Link
        to={
          "../product/" +
          props.arrId[0] +
          "/" +
          props.arrId[1] +
          "/" +
          props.arrId[2]
        }
        className="simpleCardProduct_link"
      >
        <div className="simpleCardProduct_containerForImgDiv">
          <img src={props.src} alt="фото" className="simpleCardProduct_img" />
        </div>
      </Link>
      <p className="simpleCardProduct_p">
        <Link
          to={
            "../product/" +
            props.arrId[0] +
            "/" +
            props.arrId[1] +
            "/" +
            props.arrId[2]
          }
          className="simpleCardProduct_link"
        >
          {props.contentProduct}
        </Link>
        {props.addButton_1}
        {props.addButton_2}
      </p>
    </div>
  );
}
