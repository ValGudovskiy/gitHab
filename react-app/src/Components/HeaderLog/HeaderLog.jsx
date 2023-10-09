import './HeaderLog.css';

function HeaderLog(proms){
    return(
        <div className="header__log">
        <img
          className="header__img_logo"
          src="../../../image/logo_favicon/logo-market.png"
          alt="логотип"
        />
        <h1 className="header__title-h1">
          <span className="header__span-red">Мой</span><span className="header__span-black">Маркет</span>
        </h1>
      </div>
  
    )
}

export default HeaderLog;