import "./CardProduct.css";
import { useEffect, useMemo, useState } from "react";
import { removeProduct } from "../../reducer/cart-reducer";
import { addLikeProduct, removeLikeProduct } from "../../reducer/like-reducer";
import { useDispatch, useSelector } from "react-redux";
import SimpleCardProduct from "../SimpleCardProduct/SimpleCardProduct";
import CardPriceProduct from "../CardPiceProduct/CardPiceProduct";
import ButtonPlusMinusProduct from "../ButtonPlusMinusProduct/ButtonPlusMinusProduct";
import ButtonAddOrDeletProduct from "../ButtonAddOrDeletProduct/ButtonAddOrDeletProduct";
import totalPrice from "../myFunctions/totalPrice";

export default function CartProduct(props) {
  let dispatch = useDispatch();
  let objMarkerPageCart = useMemo(() => {
    return { ...props.objMarkerPageCart };
  }, [props.objMarkerPageCart]);

  let arrLike = useSelector((state) => state.like.products);
  let id = useMemo(() => props.id, [props.id]);
  let objConfigButtonMamory = props.objConfigButtonMamory;
  let [count, setcount] = useState(1);
   let [marker, setmarker] = useState(
    Object.keys(objMarkerPageCart).includes(id) ? true : false
  );
  useEffect(
    () => setmarker(Object.keys(objMarkerPageCart).includes(id) ? true : false),
    [objMarkerPageCart, id]
  );
  let handleOnClickBtnForSelect = () => {
    if (Object.keys(objMarkerPageCart).includes(id)) {
      delete objMarkerPageCart[id];
    } else {
      objMarkerPageCart[id] = count;
    }
    props.onClickCardProduct(objMarkerPageCart);
    setmarker((c) => (!c ? (c = true) : (c = false)));
  };

  let handleCountPlus = () => {
    setcount((e) => ++e);
  };

  let handleCountMinus = () => {
    setcount((e) => (e <= 0 ? (e = 0) : --e));
  };
  useEffect(() => {
    props.onClickCardProduct({ ...objMarkerPageCart, [id]: count });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  let disabled = !marker ? "disabled" : "";
  let objDel = {};

  let handelOnclickDelitProduct = (ev) => {
    let clickId = ev.currentTarget.id;
    props.onclickDeleteProduct((obj) => {
      objDel = { ...obj };
      objDel.deleteId.push(clickId);
      dispatch(removeProduct({ id: clickId }));
      return objDel;
    }, clickId);
  };
  let selectLike = " ";
  let likeValue = "";
  let handleOnclickAddLike = (ev) => {
    let clickId = ev.currentTarget.id;
    if (!arrLike.find((el) => el.id === clickId)) {
      dispatch(addLikeProduct({ id: clickId }));
      selectLike = "#F36223";
    } else {
      dispatch(removeLikeProduct({ id: clickId }));
      selectLike = "";
    }
  };
  if (arrLike.find((el) => el.id === id)) {
    selectLike = "#F36223";
    likeValue = "из избранного";
  } else {
    selectLike = "";
    likeValue = "в избранное";
  }
  return (
    <div className="cardProduct" id={id.split("/")[2]}>
      <ButtonAddOrDeletProduct
        handleOnclick={handleOnClickBtnForSelect}
        marker={marker}
      />
      <SimpleCardProduct
        addButton_1={
          <ButtonAddOrDeletProduct
            classNameValue={"buttonAddOrDeleteProduct__displayNon"}
            handleOnclick={handleOnclickAddLike}
            select={selectLike}
            value={likeValue}
            svg={"like"}
            id={id}
          />
        }
        addButton_2={
          <ButtonAddOrDeletProduct
            classNameValue={"buttonAddOrDeleteProduct__displayNon"}
            handleOnclick={handelOnclickDelitProduct}
            value={"удалить"}
            svg={"delete"}
            id={id}
          />
        }
        id={id}
        likeValue={likeValue}
        selectLike={selectLike}
        contentProduct={props.contentProduct}
        arrId={id.split("/")}
        src={props.src}
      />
      <div className="cartProduct_ContainerPriceProductDiv">
        <CardPriceProduct
          totalPrice={totalPrice(objConfigButtonMamory, props.price, id)}
          totalPriceOld={ totalPrice(objConfigButtonMamory, props.oldPrice, id)}
        />
        <ButtonPlusMinusProduct
          disabled={disabled}
          handleCountMinus={handleCountMinus}
          count={count}
          handleCountPlus={handleCountPlus}
        />
      </div>
    </div>
  );
}
