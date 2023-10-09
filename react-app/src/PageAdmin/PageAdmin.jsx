import "./PageAdmin.css";
import FormAuthOrRegistr from "../Components/FormAuthOrRegist/FormAuthOrRegist";
import { useState } from "react";

export default function PageAdmin(props) {
  let arrInputs = [
    { name: "1 ", type: "text " },
    { name: " 2", type: " text" },
    { name: "3 ", type: " text" },
    { name: " 4", type: " text" },
    { name: " 5", type: " text" },
    { name: "6 ", type: "text " },
  ];
  let arrInputs2 = [{ name: "add ", type: "text " }];
  let [togger, settogger] = useState(true);

  return (
    <div>
      <h1>страница администратора магазина</h1>
      <FormAuthOrRegistr
        onClickBtn={()=>settogger(false)}
        arrInputs={arrInputs}
        nameBtn={"добавить товар"}
        contentBottom={
          <FormAuthOrRegistr
            arrInputs={arrInputs2}
            nameBtn={"добавить поле"}
            classDivJoint={togger?'formAuthOrRegist__displayNone':''}
          />
        }
      />
    </div>
  );
}
