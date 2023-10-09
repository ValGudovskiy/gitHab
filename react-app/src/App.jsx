import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import PageProduct from "./PageProduct/PageProduct";
import PageIndex from "./ProductIndex/ProductIndex";
import PageNotFound from "./PageNotFound/PageNotFound";
import PageCart from "./PageCart/PageCart";
import "./App.css";
import PageLike from "./PageLike/PageLike";
import {
  MainObjProductsSmartPhone,
  arrPositions,
} from "./arrays&obj/MainObjProductsSmartPhone";
import PageProfileUser from "./PageProfileUser/PageProfileUser";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DivClassBody from "./Components/DivClassBody/DivClassBody";
import { useSelector, } from "react-redux";
import PageAdmin from "./PageAdmin/PageAdmin";
import DivClassBodyContainer from "./Components/DivClassBodyContainer/DivClassBodyContainer";
let arrAuthUser = [{ path: "/pageAdmin/:id", Component: PageAdmin }];

function App() {
   let arrProducts = MainObjProductsSmartPhone.value;

   let objStatusUser = useSelector((state) => state.authUser).adminStatus;
  let arrPublicUser = [
    { path: `/product/:id`, Component: PageProduct },
    { path: "/product/like", Component: PageLike },
    { path: "/profileUser/:id", Component: PageProfileUser },
    { path: "/*", Component: PageNotFound },
    { path: "/product/cart", Component: PageCart },
  ];

  arrPositions[0].value.forEach((position) =>
    arrPublicUser.push({
      path: position.id,
      Component: PageIndex,
      arrPositions: [arrPositions, position.id],
    })
  );

  return (
    <BrowserRouter>
      <DivClassBody
        content={
          <>
            <Header />
            <DivClassBodyContainer
              content={
                <Routes>
                  {arrPublicUser
                    .concat(objStatusUser ? arrAuthUser : [])
                    .map((el) => {
                      return (
                        // <Route
                        // key={el.path}
                        //   path={el.path}
                        //   element={
                        //     <el.Component
                        //       arrPositions={el.arrPositions ?? []}
                        //       arrProducts={arrProducts }
                        //     />
                        //   }
                        // ></Route>

                        <Route key={el.path} path={`${el.path}`}>
                          <Route
                            index
                            element={
                              <el.Component
                                arrPositions={el.arrPositions ?? []}
                                arrProducts={arrProducts }
                              />
                            }
                          ></Route>
                          <Route
                            path={`:id`}
                            element={
                              <el.Component
                                arrPositions={el.arrPositions ?? []}
                                arrProducts={arrProducts }
                              />
                            }
                          >
                            <Route
                              index
                              element={
                                <el.Component
                                  arrPositions={el.arrPositions ?? []}
                                  arrProducts={arrProducts }
                                />
                              }
                            ></Route>
                            <Route
                              path={`:id`}
                              element={
                                <el.Component
                                  arrPositions={el.arrPositions ?? []}
                                  arrProducts={arrProducts }
                                />
                              }
                            ></Route>
                          </Route>
                        </Route>
                      );
                    })}
                </Routes>
              }
            />
            <Footer />
          </>
        }
      />
    </BrowserRouter>
  );
}

export default App;
