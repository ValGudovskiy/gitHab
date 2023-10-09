 import "./ProductDivImg.css";

export let ProductDivImg = (props) => {
   return (
    <div className="product ">
      {props.arrColorProduct?.typeCollor.map((element) => {
        return (
          <img
            key={element.id}
            className={`product__img product__img_${element.id} `}
            src={element.src}
            alt={element.alt}
            onLoad={(e) => {
              if (e.target.naturalWidth > e.target.naturalHeight) {
                e.target.classList.remove("product__img_height");
                e.target.classList.add("product__img_width");
              } else {
                e.target.classList.remove("product__img_width");
                e.target.classList.add("product__img_height");
              }
            }}
          />
        );
      })}
    </div>
  );
};
