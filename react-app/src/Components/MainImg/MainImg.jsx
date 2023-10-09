import "./MainImg.css";
import React, { useState } from "react";
import ColorButton1 from "../ColorButton1/ColorButton1";
import { ProductDivImg } from "../ProductDivImg/ProductDivImg";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addColorProduct } from "../../reducer/color-reducer";

function MainImg(props) {
  const dispatch = useDispatch();
  const arrConfigModel = useLocation().pathname.split("/");
   const objImgOfStor = useSelector((state) => state.colorProduct);
  const arrProducts = props.objProduct.arrConfigProduct;
  const name_header = props.objProduct.objSpecification.name_header;
  const name_colorId = props.objProduct.objSpecification.name_colorId;
  let objColorProduct = arrProducts.find(
    (el) => el.colorId === arrConfigModel[3]
  );

 
  let [select, setSelect] = useState(
    objColorProduct?.id
      ? { id: objColorProduct.id, idTr: objColorProduct.idTr }
      : { id: arrProducts[0].id, idTr: arrProducts[0].idTr }
  );
  let indexOfArrProducts = arrProducts.findIndex((el) => el.id === select.id)


  if (!(objImgOfStor.color === select.id)) {
    dispatch(addColorProduct(select));
  }

  const handlOnclickBtn = (select) => {
    setSelect(select);
    dispatch(addColorProduct(select));
  };
 
  return (
    <>
      <section className="main__img">
        <h2 className="main__title-h2">
          {name_header} {select.idTr}
        </h2>
        <ProductDivImg arrColorProduct={arrProducts[indexOfArrProducts]} />
      </section>
      <section className="color-block">
        <div className=" color-block__div-img">
          {arrProducts.map((color) => (
            <ColorButton1
              key={color.id}
              onClickBtn={() =>
                handlOnclickBtn({ id: color.id, idTr: color.idTr })
              }
              classBtn={
                "color-block__div-color" +
                " " +
                (color.id === select.id ? `color-block__div-color_select` : "")
              }
              classImg={"color-block__img-color"}
              srcImg={color.src}
              altImg={color.alt}
            />
          ))}
        </div>
        <h3 className="color-block__title-h3">
          {name_colorId} {select.idTr}
        </h3>
      </section>
    </>
  );
}

export default MainImg;
