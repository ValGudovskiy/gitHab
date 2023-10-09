import "./PageCart.css";
import { MainObjProductsSmartPhone } from "../arrays&obj/MainObjProductsSmartPhone";
import Nav from "../Components/Nav/Nav";
import BodyMain from "../Components/BodyMain/BodyMain";
import { useEffect, useState } from "react";
import CartProduct from "../Components/CardProduct/CardProduct";
import CartControl from "../Components/CartControl/CartControl";
import AsidePageCart from "../Components/AsidePageCart/AsidePageCart";
import CalculatorProducts from "../Components/CalculatorProducts/CalculatorProducts";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../reducer/cart-reducer";
import creatArrPageAndObjConfig from "../Components/myFunctions/creatArrPageAndObjConfig.js";
import changeArrDeletElementOfArr from "../Components/myFunctions/changeArrDeletElementOfArr.js";

let arrNav = [
  { id: " ", name: "Главная" },
  { name: "Электроника", id: "electronics" },
  { name: "Инструменты", id: "toolings" },
];

const arrProducts = MainObjProductsSmartPhone.value;
let objMarkerPageCartClon = {};
console.log(arrProducts);
export default function PageCart(props) {
  let dispatch = useDispatch();
  let arrCartProducts = useSelector((s) => s.cart).products;

  let objPageCart = {};

  let arrPageCart = creatArrPageAndObjConfig(
    arrCartProducts,
    arrProducts
  ).creatArr;
  arrPageCart.forEach((el) => (objPageCart[el.id] = 1));

  let [objWithCountPageCart, setobjWithCountPageCart] = useState(objPageCart);
  let arrKeysObjWithCountPageCart = Object.keys(objWithCountPageCart);
  let objConfigButtonMamory = creatArrPageAndObjConfig(
    arrCartProducts,
    arrProducts
  ).creatObj;

  let [productsDelet, setArrProductsDelet] = useState({
    deleteAll: 1,
    deleteId: [],
  });
  let [marker, setmarker] = useState(
    arrPageCart.length > 0 &&
      arrPageCart.length === arrKeysObjWithCountPageCart.length
      ? true
      : false
  );
  useEffect(
    () =>
      setmarker(
        arrPageCart.length === arrKeysObjWithCountPageCart.length ? true : false
      ),
    [arrKeysObjWithCountPageCart, arrPageCart]
  );
  if (productsDelet.deleteAll === 0) {
    arrPageCart = [];
  }
  function handleOnClickDeleteProduct(obj, id) {
    setArrProductsDelet(obj);
    changeArrDeletElementOfArr(arrPageCart, id);
    delete objWithCountPageCart[id];
  }
  let handleOnClickDeleteAll = () => {
    let objDel = {};
    setArrProductsDelet((obj) => {
      objDel = structuredClone(obj);
      objDel.deleteAll = 0;
      return objDel;
    });
    arrPageCart.forEach((element) => dispatch(removeProduct(element)));
  };
  objMarkerPageCartClon = { ...objMarkerPageCartClon, ...objWithCountPageCart };

  let handleOnClickSelektAll = () => {
    let objMarkerPageCartDelet = {};
    arrPageCart.forEach((el) => {
      if (!marker) {
        objMarkerPageCartDelet[el.id] = objMarkerPageCartClon[el.id];
      } else {
        objMarkerPageCartDelet = {};
      }
      setobjWithCountPageCart(objMarkerPageCartDelet);
    });
    setmarker((c) => (c ? (c = false) : (c = true)));
  };
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
        contentMain1={""}
        contentDiv={
          arrCartProducts.length === 0 ? (
            <h1>Вы ничего не выбрали</h1>
          ) : (
            <>
              <CartControl
                marker={marker}
                displayNone={
                  (arrPageCart?.length || 0) === 0
                    ? "cartControl_displayNone"
                    : ""
                }
                handleOnclick={handleOnClickDeleteAll}
                handleOnClickSelektAll={handleOnClickSelektAll}
                amountProduct={arrPageCart.length}
              />
              {arrPageCart.map((element) => (
                <CartProduct
                  onClickCardProduct={(e) => {
                    setobjWithCountPageCart(e);
                  }}
                  onclickDeleteProduct={handleOnClickDeleteProduct}
                  objMarkerPageCart={objWithCountPageCart}
                  key={element.id}
                  id={element.id}
                  contentProduct={element.arrSpecification.join("; ")}
                  src={element.src}
                  price={element.price}
                  oldPrice={element.oldPrice}
                  objConfigButtonMamory={objConfigButtonMamory}
                  pageCartMarker={marker}
                />
              ))}
            </>
          )
        }
        contentMain2={
          <>
            <AsidePageCart
              content={
                <CalculatorProducts
                  objWithCountPageCart={objWithCountPageCart}
                  mainArr={arrPageCart}
                  objConfigButtonMamory={objConfigButtonMamory}
                />
              }
            />
            <AsidePageCart
              content={
                "Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользИнформация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.В песочнице есть тестовый пример.Важные детали:На каждого пользователя должен приходиться один запЗапросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можнЕсли какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов."
              }
            />
            <AsidePageCart />
          </>
        }
      />
    </>
  );
}
