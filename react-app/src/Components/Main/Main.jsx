import BodyMain from "../BodyMain/BodyMain";
import MainImg from "../MainImg/MainImg";
import MainFeatureBlock from "../MainFeatureBlock/MainFeatureBlock";
import MainDescriptionBlock from "../MainDescriptionBlock/MainDescriptionBlock";
import MainTableBlock from "../MainTableBlock/MainTableBlock";
import MainReviewsBlock from "../MainReviewsBlock/MainReviewsBlock";
import Aside from "../Aside/Aside";

import "./Main.css";

function Main(props) {
  const objProduct = props.objProduct;
  return (
    <BodyMain
      contentMain1={<MainImg objProduct={objProduct} />}
      contentDiv={[
        <MainFeatureBlock key={"FB"} objProduct={objProduct} />,
        <MainDescriptionBlock key={"2"} objProduct={objProduct} />,
        <MainTableBlock key={"3"} />,
        <MainReviewsBlock key={"4"} />,
      ]}
      contentMain2={<Aside objProduct={objProduct} />}
    />
  );
}

export default Main;
