import "./ContainerNewPrice.css";

export default function ContainerNewPrice(props) {
  return (
    <>
      <div className="aside-price__price-new">
        <b>{props.asidePricePriceNew}</b>
      </div>
      {props.arrPriceInfo.map((priceInfo) => (
        <p className="aside-price__price-info-p" key={priceInfo.id}>
          {priceInfo.name} в {priceInfo.date} <b>{priceInfo.cost}</b>
        </p>
      ))}
      {props.buyBtn ? (
        <div className="aside-price__contaner-buy-btn">{props.buyBtn}</div>
      ) : (
        ""
      )}
    </>
  );
}
