import style from "./Partners.module.scss";
import logo1 from "../../assets/svg/partners/logo-1.svg";
import logo2 from "../../assets/svg/partners/logo-2.svg";
import logo3 from "../../assets/svg/partners/logo-3.svg";
import logo4 from "../../assets/svg/partners/logo-4.svg";
import logo5 from "../../assets/svg/partners/logo-5.svg";
export const Partners = () => {
  return (
    <section className={style.partnersContainer} id="partners">
      <p className={style.partnersPreTitle}>Співпраця/</p>
      <h2 className={style.partnersTitle}>Наші партнери</h2>
      <div className={style.partnersListWrp}>
        <ul className={style.partnersList}>
          <li className={style.partnersItem}>
            <img className={style.partnersItemImg} src={logo1}></img>
          </li>
          <li className={style.partnersItem}>
            <img className={style.partnersItemImg} src={logo2}></img>
          </li>
          <li className={style.partnersItem}>
            <img className={style.partnersItemImg} src={logo3}></img>
          </li>
          <li className={style.partnersItem}>
            <img className={style.partnersItemImg} src={logo4}></img>
          </li>
          <li className={style.partnersItem}>
            <img className={style.partnersItemImg} src={logo5}></img>
          </li>
        </ul>
      </div>
    </section>
  );
};
