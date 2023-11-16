import style from "./CarFromUSA.module.scss";
import copart from "../../assets/svg/copart.svg";
import iaa from "../../assets/svg/iaa.svg";
import manheim from "../../assets/img/manheim.png";
import { BsClipboard2CheckFill } from "react-icons/bs";

import { RiAuctionFill } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";

import { IoSettingsSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

import { GiCargoShip } from "react-icons/gi";
import SearchCar from "../../assets/svg/SearchCar";
import { ContactUsForm } from "../contactUsForm/ContactUsForm";

export const CarFromUSA = () => {
  return (
    <section className={style.carContainer} id="car">
      <p className={style.carPreTitle}>пригон автомобілів/</p>
      <h2 className={style.carTitle}>Авто з США під ключ</h2>
      <div className={style.advantagesListWrp}>
        <ul className={style.advantagesList}>
          <li className={style.advantagesItem}>
            <div className={style.advantagesItemWrp}>
              <SearchCar className={style.advantagesSvg} />
              <p className={style.advantagesText}>Підбір автомобіля</p>
            </div>
            <p className={style.advantagesDescription}>
              Підбираємо автомобілі за заданими критеріями: марка, модель,
              комплектація, пробіг, рік випуску та технічний стан.
            </p>
          </li>
          <li className={style.advantagesItem}>
            <div className={style.advantagesItemWrp}>
              <IoSettingsSharp
                color="#dfff00
"
                className={style.advantagesSvg}
              />
              <p className={style.advantagesText}>Перевірка за VIN-номером</p>
            </div>
            <p className={style.advantagesDescription}>
              Перевіряємо вибрані автомобілі за такими параметрами: історія та
              своєчасність обслуговування, кількість власників, чи брав участь
              автомобіль раніше в торгах, чи надійний продавець, і чи не було
              раніше інших ДТП. Відсіваємо автомобілі з поганою історією.
            </p>
          </li>
          <li className={style.advantagesItem}>
            <div className={style.advantagesItemWrp}>
              <RiAuctionFill
                color="#dfff00
"
                className={style.advantagesSvg}
              />
              <p className={style.advantagesText}>Участь у торгах</p>
            </div>

            <p className={style.advantagesDescription}>
              Визначаємо максимальну ставку на аукціоні, щоб розміститися у
              вашому бюджеті: розраховуємо вартість лоту, логістики,
              розмитнення, ремонту, сертифікації та постановки на облік. Такий
              підхід дозволяє уникнути прихованих платежів. Після вашого
              підтвердження ми беремо участь у торгах до максимальної узгодженої
              ставки.
            </p>
          </li>
          <li className={style.advantagesItem}>
            <div className={style.advantagesItemWrp}>
              <FaSackDollar
                color="#dfff00
"
                className={style.advantagesSvg}
              />
              <p className={style.advantagesText}>Оплата</p>
            </div>

            <p className={style.advantagesDescription}>
              За фактом виграшу автомобіля надсилаємо вам міжнародний
              рахунок-фактуру, який потрібно сплатити протягом 2 днів
              SWIFT-платежем через банк. Рахунок-фактура включає: вартість лоту,
              комісію аукціону, транспортування США до порту, доставку морем в
              зазначений порт Європи та послуги брокера/експедитора.
            </p>
          </li>
          <li className={style.advantagesItem}>
            <div className={style.advantagesItemWrp}>
              <GiCargoShip
                color="#dfff00
"
                className={style.advantagesSvg}
              />
              <p className={style.advantagesText}>Доставка</p>
            </div>

            <p className={style.advantagesDescription}>
              Після оплати автомобіль вантажать на евакуатор, роблять фотозвіт
              та відправляють до найближчого та вигідного з доставки морського
              порту. Перед завантаженням у контейнер проводиться повторний
              детальний огляд автомобіля та фотозвіт. Автомобіль відправляється
              судном до порту в Європі.
            </p>
          </li>
          <li className={style.advantagesItem}>
            <div className={style.advantagesItemWrp}>
              <BsClipboard2CheckFill
                color="#dfff00
"
                className={style.advantagesSvg}
              />
              <p className={style.advantagesText}>Оформлення</p>
            </div>

            <p className={style.advantagesDescription}>
              Допомагаємо не лише придбати та доставити авто в Україну, а й
              надаємо допомогу у митному оформленні, сертифікації та постановці
              авто на облік.
            </p>
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: "64px" }}>
        <h2 className={style.auctionTitle}>Аукціони на яких ми купуємо авто</h2>
        <ul className={style.auctionList}>
          <li>
            <a href="https://www.copart.com/ru/" target="_blanc">
              <img className={style.auctionItemImgFs} src={copart}></img>
            </a>
          </li>
          <li>
            <a href="https://site.manheim.com/" target="_blanc">
              <img className={style.auctionItemImgSc} src={manheim}></img>
            </a>
          </li>
          <li>
            <a href="https://www.iaai.com/ru-ru/" target="_blanc">
              <img src={iaa} className={style.auctionItemImgTr}></img>
            </a>
          </li>
        </ul>
      </div>
      <div className={style.contactContainer}>
        <div>
          <h2>Зателефонуйте нам та отримайте детальну консультацію</h2>
          <div className={style.carMobileTelWrp}>
            <div className={style.carMobileWrp}>
              <BsTelephone
                color="#dfff00
"
              />
              <a href="tel:+38 098 749 70 66" className={style.carMobileTel}>
                +38 098 749 70 66
              </a>
            </div>
            <div className={style.carMobileWrp}>
              <BsTelephone
                color="#dfff00
"
              />
              <a href="tel:+38 096 556 50 00" className={style.carMobileTel}>
                +38 096 556 50 00
              </a>
            </div>
          </div>
        </div>
        <div>
          <h2>Або залиште свій номер телефону, і ми вам перезвонимо</h2>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};
