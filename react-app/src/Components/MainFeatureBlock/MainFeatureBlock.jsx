import "./mainFeatureBlock.css";
import React, { useState } from "react";
 import styled from "styled-components";
import { useSelector } from "react-redux";
import PropertyProduct from "../PropertyProduct/PropertyProduct";
import ColorButton1 from "../ColorButton1/ColorButton1";
import { addConfigProduct } from "../../reducer/config-reducer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
let Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 10px;
  width: 100%;
`;

let H2 = styled.h3`
  order: -1;
  width: 100%;
  flex-basis: 100%;
  margin: 0;
`;

let SpanBr = styled.span`
  flex-basis: 100%;
`;

let H3 = styled.h3`
  margin: 0;
  width: 100%;
`;

function MainFeatureBlock(props) {
  const dispatch = useDispatch();
  const arrConfigModel = useLocation().pathname.split("/");
  const configName = useSelector((state) => state.configProduct.config);
  const arrConfigButtonMamory = props.objProduct.arrConfigButtonMamory;

  const configButtonMamory = arrConfigButtonMamory.find(
    (element) => `${element.id}` === `${arrConfigModel[4]}`
  );
   const objSpecification = props.objProduct.objSpecification;
  let [select, setSelect] = useState(
    configButtonMamory?.id
      ? configButtonMamory
      : { id: arrConfigButtonMamory[0].id }
  );

  if (!(configName && configName === select.id)) {
    dispatch(addConfigProduct(select));
  }

   const onclickBtn = (select) => {
    dispatch(addConfigProduct(select));

    setSelect(select);
  };
  return (
    <section>
      <Div>
        <div className=" contaner-btn__div-btns">
          {arrConfigButtonMamory.map((config) => (
            <ColorButton1
              onClickBtn={() => onclickBtn({ id: config.id })}
              classBtn={
                `contaner-btn__div-btn-config_${config.id} contaner-btn__div-btn-config` +
                " " +
                (config.id === select.id
                  ? ` contaner-btn__div-btn-config_select`
                  : "")
              }
              contentDiv={config.content}
              key={config.id}
            />
          ))}
        </div>

         <H2 className="contaner-btn__title-h3">
          {objSpecification.configMainFeatureBlock} {configName}
        </H2>

        <SpanBr></SpanBr>
        <H3>{objSpecification.propertyMainFeatureBlock}</H3>
        <PropertyProduct
          objSpecification={objSpecification}
          configName={configName}
        />
      </Div>
    </section>
  );
}

export default MainFeatureBlock;
