import HeaderLog from "../HeaderLog/HeaderLog";
import { Link } from "react-router-dom";
import ButtonLikeOrCartOrProfilOrText from "../ButtonLikeOrCartOrProfilOrText/ButtonLikeOrCartOrProfilOrText";
import "./Header.css";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

function Header(props) {
  let objUserOfStore = useSelector((state) => state.authUser);
  let [authUser, setAuthUse] = useState(false);
  useEffect(
    () => setAuthUse(objUserOfStore.userStatus),
    [objUserOfStore.userStatus]
  );
  const location = useLocation();
  let cart = useSelector((state) => state.cart.products.length);
  let lotCart = " ";
  let like = useSelector((state) => state.like.products.length);
  let lotLike = " ";
  //----------------------------

  const resultCart = useMemo(() => {
    return cart;
  }, [cart]);

  if (+resultCart === 0) {
    lotCart = "header__circle-none";
  }
  const resultLike = useMemo(() => {
    return like;
  }, [like]);

  if (+resultLike === 0) {
    lotLike = "header__circle-none";
  }
  return (
    <header className="header">
      <section className="header__item">
        <Link to={"../"} className="header__link">
          <HeaderLog />
        </Link>
        <div className="header__jointDiv">
          <Link to={"../product/like"}>
            <ButtonLikeOrCartOrProfilOrText
              classSvg={
                location.pathname === "/product/like" ? "header_select" : ""
              }
              classBtn={`header__btn header__btn_1   `}
              contentBtn={"like"}
              classSpan1={`header__circle ${lotLike}`}
              classSpan2={"header__lot header__lot"}
              contentSpan2={resultLike}
            />
          </Link>
          <Link to={"../product/cart"}>
            <ButtonLikeOrCartOrProfilOrText
              classSvg={
                location.pathname === "/product/cart" ? "header_select" : ""
              }
              classBtn={`header__btn header__btn_1  `}
              contentBtn={"cart"}
              classSpan1={`header__circle ${lotCart}`}
              classSpan2={`header__lot `}
              contentSpan2={resultCart}
            />
          </Link>
          <Link to={"../profileuser/0"}>
            <ButtonLikeOrCartOrProfilOrText
              classSvgAuth={authUser ? "header_select" : ""}
              classSvg={
                location.pathname.split("/")[1] === "profileuser"
                  ? "header_select"
                  : ""
              }
              classBtn={`header__btn header__btn_2 `}
              classSvgRect={objUserOfStore.adminStatus?'buttonAside__svgBox':''}
              contentBtn={"profil"}
              classSpan2={`header__lot `}
            />
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
