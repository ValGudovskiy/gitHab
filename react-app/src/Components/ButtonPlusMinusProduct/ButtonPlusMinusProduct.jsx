import './ButtonPlusMinusProduct.css';

export default function ButtonPlusMinusProduct(props){

    return(
        <div className="buttonPlusMinusProduct_addProductDiv">
        <button
          disabled={props.disabled}
          className="buttonPlusMinusProduct_countMinusButton"
          onClick={props.handleCountMinus}
        >
          -
        </button>
        <span className="buttonPlusMinusProduct_countSpan">{props.count}</span>
        <button
          disabled={props.disabled}
          className="buttonPlusMinusProduct_countPlusButton"
          onClick={props.handleCountPlus}
        >
          +
        </button>
      </div>

    )
}