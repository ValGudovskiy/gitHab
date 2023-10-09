import './CardPriceProduct.css';


export default function CardPriceProduct(props){

    return(
        <div className="cardPriceProduct_priceDiv">
        <span className="cardPriceProduct_priceSpan">
          {props.totalPrice}
        </span>
        <span className="cardPriceProduct_oldPriceSpan">
          <s>{props.totalPriceOld}</s>
        </span>
      </div>

    )
}