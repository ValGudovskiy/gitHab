import Advertisement from "../Advertisement/Advertisement";
import ButtonLikeOrCartOrProfilOrText from "../ButtonLikeOrCartOrProfilOrText/ButtonLikeOrCartOrProfilOrText";
import arrPriceInfo from "../../arrays&obj/arrPriceInfo";
import "./Aside.css";

import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../reducer/cart-reducer";
import { addLikeProduct, removeLikeProduct } from "../../reducer/like-reducer";
import ContainerOldPrice from "../ContainerOldPrice/ContainerOldPrice";
import ContainerNewPrice from "../ContainerNewPrice/ContainerNewPrice";

function Aside(props) {
  const objSpecification = props.objProduct.objSpecification;
  const arrConfigButtonMamory = props.objProduct.arrConfigButtonMamory;
  const arrLike = useSelector((state) => state.like.products);
  const arrCart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const idColorProduct = useSelector((s) => s.colorProduct.color);
  const idConfigProduct = useSelector((s) => s.configProduct.config);

  function price(arr, price) {
    price = parseInt(price);
    let pricePluse = arr.find(
      (memory) => memory.id === idConfigProduct
    ).priceMarkup;

    price = Math.ceil(price * (1 + pricePluse / 100));
    return price;
  }

  let selectLike = "";
  let classLike = "";
  const handleClickAddLike = () => {
    if (!arrLike.find((item) => item.id === idColorProduct + idConfigProduct)) {
      dispatch(addLikeProduct({ id: idColorProduct + idConfigProduct }));
      return;
    }
    dispatch(removeLikeProduct({ id: idColorProduct + idConfigProduct }));
    selectLike = "";
  };
  if (arrLike.find((item) => item.id === idColorProduct + idConfigProduct)) {
    selectLike = "#F36223";
    classLike = "buttonAside-path_select";
  }
   let select;
  let contentBuy;
  if (select === undefined) {
    select = " ";
    contentBuy = "Добавить в корзину";
  }
  function handleClickAddCart() {
    if (!arrCart.find((item) => item.id === idColorProduct + idConfigProduct)) {
      dispatch(addProduct({ id: idColorProduct + idConfigProduct }));
      select = "-select";
      return;
    }
    dispatch(removeProduct({ id: idColorProduct + idConfigProduct }));
    select = " ";
  }
  if (arrCart.find((item) => item.id === idColorProduct + idConfigProduct)) {
    select = "-select";
    contentBuy = "Товар уже в корзине";
  }
  return (
    <aside className="main__aside">
      <div className="aside-price">
        <ContainerOldPrice
          asidePrice__priceOld={
            price(
              arrConfigButtonMamory,
              objSpecification.asidePrice__priceOld
            ) + "P"
          }
          asidePrice__priceSale={
            price(
              arrConfigButtonMamory,
              objSpecification.asidePrice__priceOld
            ) -
            price(
              arrConfigButtonMamory,
              objSpecification.asidePrice__priceNew
            ) +
            "P"
          }
          contentAddLikeDiv={
            <ButtonLikeOrCartOrProfilOrText
              onClick={handleClickAddLike}
              classBtn={"add-like__btn"}
              contentBtn={"like"}
              select={selectLike}
              classPathSvg={classLike}

            />
          }
        />
        <ContainerNewPrice
          asidePricePriceNew={
            price(
              arrConfigButtonMamory,
              objSpecification.asidePrice__priceNew
            ) + "P"
          }
          arrPriceInfo={arrPriceInfo}
          buyBtn={
            <ButtonLikeOrCartOrProfilOrText
              onClick={handleClickAddCart}
              classBtn={`aside-price__buy-btn${select} buttonAside_joint`}
              contentBtn={`${contentBuy} `}
            />
          }
        />
      </div>
      <Advertisement />
    </aside>
  );
}

export default Aside;
