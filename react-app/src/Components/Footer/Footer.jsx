import CurrentDate from "../CurrentDate/CurrentDate";
import style from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <p className={style.footer__text}>
          <b>
            © ООО «<span className={style.footer__span}>Мой</span>Маркет» 2018-
            <CurrentDate />.
          </b>
          <br />
          <span >Для уточнения информации звоните по номеру  </span>
          <a className={style.footer__linkA} href="tele:+79000000000">
            +7 900 000 0000
          </a>
          ,<br className={style.br} />
          <span> а предложения по сотрудничеству отправляйте на почту  </span>
          <a className={style.footer__linkA} href="mailto:partner@mymarket.com">
            partner@mymarket.com
          </a>
        </p>
        <span className={style.footer__spanUp}>
          <a id="doun" className={style.footer__linkA} href="#up">
            Наверх
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
