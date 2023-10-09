import "./PageProduct.css";
import Nav from "../Components/Nav/Nav";
import Main from "../Components/Main/Main";
import { useLocation, Navigate } from "react-router-dom";

function PageProduct(props) {
  const arrIdModel = useLocation().pathname.split("/");
  let model = arrIdModel[2];

  let objProducts =
    props.arrProducts.find((el) => {
      return Object.keys(el.products).includes(model);
    })?.products ?? {};
  if (!objProducts[model]) {
    return <Navigate to={"/"} />;
  }
  let arrNav = [
    { id: " ", name: "Главная" },
    { name: "Электроника", id: "electronics" },
    { name: "Инструменты", id: "toolings" },
  ];
  return (
    <>
      {arrNav.map((element, index) => (
        <Nav
          key={element.id + "Nav"}
          element={element}
          index={index}
          length={arrNav.length}
        />
      ))}
      <Main objProduct={objProducts[model]} />
    </>
  );
}

export default PageProduct;
