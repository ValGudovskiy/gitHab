import { Link,useLocation } from "react-router-dom";
 import PageDemonstration from "../Components/PageDemonstration/PageDemonstration";
import "./ProductIndex.css";
import DivClassBodyContainer from "../Components/DivClassBodyContainer/DivClassBodyContainer";
import Nav from "../Components/Nav/Nav";
import { useEffect } from "react";

function PageIndex(props) {
  const [arrPositions, idArr] = props.arrPositions;
  // const arrPosition = arrPositions[0];
  let arrNav = [...arrPositions];
  const location = useLocation();
useEffect(() => {
 }, [location]);

   return (
         <>
           <DivClassBodyContainer
            content={
              <>
                <div className="productIndex_nav">
                  {arrNav.map((element, index) => (
                    <Nav
                      key={"Nav" + element.id}
                      element={element}
                      index={index}
                      length={arrNav.length}
                      model={""}
                    />
                  ))}
                </div>

                 {arrPositions.slice(1).map((element, index) =>
                  element.id === idArr || !idArr ? (
                    <div
                      className="productIndex_1"
                      key={element.id.split("/")[0] + "ProductIndex"}
                    >
                      <Link to={`../` + element.id}>{element.name}</Link>
                      {element.value.length > 0
                        ? element.value.map((element) => (
                            <div key={element.id}>
                               {element.name}
                               <div>
                                {element.value.length > 0
                                  ? element.value.map((element) => (
                                      <div key={element.id}>
                                        {element.name}
                                        {element.value.length > 0
                                          ? element.value.map((element) => {
                                              return (
                                                <div key={element}>
                                                  <Link
                                                    to={"../product/" + element}
                                                  >
                                                    {element}
                                                  </Link>
                                                </div>
                                              );
                                            })
                                          : ""}
                                      </div>
                                    ))
                                  : ""}
                              </div>
                            </div>
                          ))
                        : ""}
                    </div>
                  ) : (
                    ""
                  )
                )}
              </>
            }
          />
          <PageDemonstration
            span1={[]}
            span2={"Но в рамках курса главная страница  используется лишь"}
            span3={"в демонстрационных целях"}
          />
         </>
   );
}

export default PageIndex;
