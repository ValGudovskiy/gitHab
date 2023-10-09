import "./CalculatorProducts.css";
import ButtonLikeOrCartOrProfilOrText from "../ButtonLikeOrCartOrProfilOrText/ButtonLikeOrCartOrProfilOrText";
import ContainerOldPrice from "../ContainerOldPrice/ContainerOldPrice";
import ContainerNewPrice from "../ContainerNewPrice/ContainerNewPrice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DivClassBodyContainer from "../DivClassBodyContainer/DivClassBodyContainer";
import FormAuthOrRegistr from "../FormAuthOrRegist/FormAuthOrRegist";

let objForm = {
  arrInputs: [
    { name: "Фамилия", type: "text" },
    { name: "Имя", type: "text" },
    { name: "адрес доставки", type: "text" },
    { name: "телефон", type: "pone" },
    { name: "email", type: "emaile" },
    { name: "коментарии", type: "text" },
   ],
  nameForm:"Проверьте введёные данные"
};


export default function CalculatorProducts(props) {
  const userAuth = useSelector((state) => state.authUser);
  let navigate = useNavigate();
  let [markerDivOrder, setMarkerDivOrder] = useState(false);
  let mainArr = props.mainArr;
  let displayNone =
    props.mainArr.length === 0 ? "calculatorProducts__displayNone" : "";

  let objWithCountPageCart = props.objWithCountPageCart;
  let summPice = 0;
  let summOldPrice = 0;
  let objCalculatorProductWithArrPrice = {};

  mainArr.forEach((element) => {
    objCalculatorProductWithArrPrice[element.id] = [];
    objCalculatorProductWithArrPrice[element.id].push([element.price]);
    objCalculatorProductWithArrPrice[element.id].push([element.oldPrice]);
  });

  let countPieces = 0;

  countPieces = Object.keys(objWithCountPageCart).reduce((sum, key) => {
    let arrKeyProduct = key.split("/");
    let pricePlus = props.objConfigButtonMamory[arrKeyProduct[0]]?.find(
      (obj) => {
        return +obj.id === +arrKeyProduct[2];
      }
    )?.priceMarkup;
    summPice +=
      objWithCountPageCart[key] *
      (parseInt(
        objCalculatorProductWithArrPrice[key]
          ? objCalculatorProductWithArrPrice[key][0]
          : 0
      ) *
        (1 + (1 * pricePlus) / 100));

    summOldPrice +=
      objWithCountPageCart[key] *
      (parseInt(
        objCalculatorProductWithArrPrice[key]
          ? objCalculatorProductWithArrPrice[key][1]
          : 0
      ) *
        (1 + (1 * pricePlus) / 100));
    if (mainArr.length === 0) {
      return (sum = 0);
    }
    return (sum += objWithCountPageCart[key]);
  }, 0);
  const heandleOnClicOrder = () => {
    if (!userAuth.userStatus) {
      navigate("/profileuser/0");
    } else {
      setMarkerDivOrder(() => true);
    }
  };

  return (
    <div className={["calculatorProducts ", displayNone].join(" ")}>
      <div
        className={
          markerDivOrder
            ? "calculatorProducts__order"
            : "calculatorProducts__displayNone"
        }
        onClick={(ev) => {
          if (
            ev.target.className === "body__container " ||
            ev.target.className === "calculatorProducts__order"
          ) {
            setMarkerDivOrder(false);
          }
        }}
      >
        <DivClassBodyContainer
          className={""}
          content={
            <div className="calculatorProducts__divOrderContent">
              <FormAuthOrRegistr
                contentTop={objForm.nameForm}
                arrInputs={objForm.arrInputs}
                creatTextInP={true}
                nameBtn={"button"}
              />
            </div>
          }
        />
      </div>
      <ButtonLikeOrCartOrProfilOrText
        classBtn={"calculatorProducts_placeOrderBtn buttonAside_joint"}
        contentSpan2={`оформить заказ`}
        onClick={heandleOnClicOrder}
      />
      <ContainerOldPrice
        contanerPriceDiv={"containerOldPrice__containerDiv"}
        namePriceOld={<i>скидка:</i>}
        asidePrice__priceSale={summOldPrice - summPice + "P"}
      />
      <ContainerNewPrice
        asidePricePriceNew={
          <>
            <span className="calculatorProducts__productsSpan">
              <i>товаров:</i> {countPieces + " шт."}
            </span>
            <span className="calculoratProducts__totalSpan">
              <p className="calculatorProducts__totalP">итого: </p>
              {summPice + "P"}
            </span>
          </>
        }
        arrPriceInfo={[
          { name: "само вывоз", id: 12 },
          { name: "доставка", id: 1201 },
        ]}
        buyBtn={""}
      />
    </div>
  );
}
