import "./PageProfileUser.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAuthOrRegistr from "../Components/FormAuthOrRegist/FormAuthOrRegist";
import { addUser } from "../reducer/authUser-reducer";
import { Link } from "react-router-dom";

//Массивы для управления формой
let arrRegistr = [
  { name: "login", type: "text" },
  { name: "name", type: "text" },
  { name: "phone", type: "tel" },
  { name: "email", type: "email" },
  { name: "address", type: "text" },
  { name: "avatar", type: "file" },
  { name: "password", type: "password" },
];

let arrAuth = [
  { type: "text", name: "login" },
  { type: "password", name: "password" },
];
//==========================================
export default function PageProfileUser(props) {
  let objUserOfStore = useSelector((state) => state.authUser);
  let [authUse, setAuthUse] = useState(false);
  let [authUseAdmin, setAuthUseAdmin] = useState(false);
  let [markerGoIn, setMarkerGoIn] = useState(false);
  let [markerRegister, setMarkerRegister] = useState(false);
  let dispatch = useDispatch();

  let heandleOnclickGoIn = (event, obj) => {
    dispatch(addUser(obj));
  };
  useEffect(() => {
    setAuthUse(objUserOfStore.userStatus);
  }, [objUserOfStore.userStatus]);
  useEffect(() => {
    setAuthUseAdmin(objUserOfStore.adminStatus);
  }, [objUserOfStore.adminStatus]);

  let heandleOnclickRegisterUser = (event, obj) => {
    dispatch(addUser(obj));
    event.target.parentElement.submit();
  };

  let heandleOnclickOut = () => {
    dispatch(
      addUser({ password: null, userStatus: false, adminStatus: false })
    );
    setMarkerGoIn(false);
    setMarkerRegister(false);
    setAuthUse(false);
    setAuthUseAdmin(false);
  };
  return (
    <>
      {!(authUse || authUseAdmin) ? (
        <>
          <h1>вы не авторизованны</h1>
          <FormAuthOrRegistr
            nameBtn={"войти"}
            arrInputs={arrAuth}
            onClickBtn={() => {
              setMarkerGoIn(true);
              setMarkerRegister(false);
            }}
            heandleOnclickGoIn={heandleOnclickGoIn}
            marker={markerGoIn}
          />
          <br />
          <FormAuthOrRegistr
            nameBtn={"зарегистрироваться"}
            arrInputs={arrRegistr}
            onClickBtn={() => {
              setMarkerRegister(true);
              setMarkerGoIn(false);
            }}
            heandleOnclickGoIn={heandleOnclickRegisterUser}
            marker={markerRegister}
          />
        </>
      ) : (
        <>
          <h1>
            {!authUseAdmin
              ? "вы вошли как " + objUserOfStore.name
              : "вы вошли как адинистратор " + objUserOfStore.name}
          </h1>
          <button onClick={heandleOnclickOut}>выйти</button>

          <img
            src="https://thispersondoesnotexist.com/"
            alt="user"
            style={{ height: "200px", display: "block" }}
          />
          {authUseAdmin ? (
            <Link to={"/pageAdmin/0"}>управление магазином</Link>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}
