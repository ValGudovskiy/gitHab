import "./ContainerOldPrice.css";

export default function ContainerOldPrice(props) {
  return (
    <div className="contanerOldPrice__mainDiv">
      <div
        className={`contanerOldPrice__contaner-price ${props.contanerPriceDiv}`}
      >
        <span className=" contanerOldPrice__price-old">
          {props.namePriceOld}
          <s>{props.asidePrice__priceOld}</s>
        </span>
        <span className=" contanerOldPrice__price-sale">
          -{props.asidePrice__priceSale}
        </span>
      </div>
      <div className="add-like">{props.contentAddLikeDiv}</div>
    </div>
  );
}
