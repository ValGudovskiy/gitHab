import "./PageLike.css";
import BodyMain from "../Components/BodyMain/BodyMain";
import Nav from "../Components/Nav/Nav";
import CartControl from "../Components/CartControl/CartControl";
import SimpleCardProduct from "../Components/SimpleCardProduct/SimpleCardProduct";
import ButtonLikeOrCartOrProfilOrText from "../Components/ButtonLikeOrCartOrProfilOrText/ButtonLikeOrCartOrProfilOrText";
import ButtonAddOrDeletProduct from "../Components/ButtonAddOrDeletProduct/ButtonAddOrDeletProduct";
import { MainObjProductsSmartPhone } from "../arrays&obj/MainObjProductsSmartPhone";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLikeProduct } from "../reducer/like-reducer";
import { addProduct, removeProduct } from "../reducer/cart-reducer";
import creatArrPageAndObjConfig from "../Components/myFunctions/creatArrPageAndObjConfig.js";

let arrNav = [
  { id: " ", name: "Главная" },
  { name: "Электроника", id: "electronics" },
  { name: "Инструменты", id: "toolings" },
];

const objProducts = MainObjProductsSmartPhone.value;

export default function PageLike(props) {
  const dispatch = useDispatch();
  let arrCartProducts = useSelector((s) => s.like).products;
  let arrPageCart = useSelector((s) => s.cart).products;
  let arrPageLike = creatArrPageAndObjConfig(
    arrCartProducts,
    objProducts
  ).creatArr;
  let [arrPageCartLike, setArrPageCartLike] = useState(arrPageLike);

  function deletAllArrProducts() {
    setArrPageCartLike([]);
    arrPageLike.map((element) => dispatch(removeLikeProduct(element)));
  }

  function deletOneOfArrProducts(id) {
    dispatch(removeLikeProduct({ id: id }));

    let newArr = arrPageCartLike.map((el) => el);
    newArr.splice(
      newArr.findIndex((el) => el.id === id),
      1
    );
    setArrPageCartLike(newArr);
  }

  function addFill(arr, element) {
    if (arr.findIndex((el) => el.id === element.id) >= 0) {
      return "#da4a0c";
    }
  }

  function addOneOfArrProducts(id) {
    arrPageCart.findIndex((el) => el.id === id) < 0
      ? dispatch(addProduct({ id: id }))
      : dispatch(removeProduct({ id: id }));
  }

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

      <BodyMain
        contentDiv={
          <>
            {arrPageLike.length > 0 ? (
              <CartControl
                handleOnclick={deletAllArrProducts}
                markerSelect={!false}
                valueDelete={"очистить избранное"}
                amountProduct={arrPageLike.length}
              />
            ) : (
              <h1>Вы ничего не выбрали</h1>
            )}
            {arrPageCartLike.map((element) => (
              <div key={element.id}>
                <SimpleCardProduct
                  id={element.id}
                  arrId={element.id.split("/")}
                  src={element.src}
                  contentProduct={element.arrSpecification.join("; ")}
                  addButton_1={
                    <ButtonLikeOrCartOrProfilOrText
                      classBtn={"pageLike_cartBtn"}
                      contentBtn={"cart"}
                      onClick={() => {
                        addOneOfArrProducts(element.id);
                      }}
                      fill={addFill(arrPageCart, element)}
                    />
                  }
                  addButton_2={
                    <ButtonAddOrDeletProduct
                      handleOnclick={() => deletOneOfArrProducts(element.id)}
                      svg={"delete"}
                      value={"удалить"}
                    />
                  }
                />
              </div>
            ))}
          </>
        }
      />
    </>
  );
}
