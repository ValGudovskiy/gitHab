import { Link } from "react-router-dom";
import PageDemonstration from "../Components/PageDemonstration/PageDemonstration";

function PageNotFound() {
  return (
    <PageDemonstration
      span1={"эта страница не существует"}
      link={<Link to={"./"}>Перейти на главную страницу</Link>}
    />
  );
}

export default PageNotFound;
