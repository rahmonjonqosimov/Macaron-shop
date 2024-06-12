import React from "react";
import "./index.scss";
import img1 from "../../assets/images/footer-img-1.svg";
import img2 from "../../assets/images/footer-img-2.svg";
import img3 from "../../assets/images/footer-img-3.svg";
import { FaInstagram, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const item = [
    {
      id: 1,
      title: "Информация",
      items: [
        "О компании",
        "Гарантии вкуса и свежести",
        "Доставка и оплата",
        "Контакты",
      ],
    },
    {
      id: 2,
      title: "Каталог",
      items: [
        "Каталог десертов",
        "Готовые наборы",
        "Собрать свой набор",
        "Наборы с печатью",
        "Свадебные предложения",
        "Акции",
      ],
    },
    {
      id: 3,
      title: "ДЛЯ БИЗНЕСА",
      items: [" Корпоративные подарки", "Для юридических лиц", "Оповикам"],
    },
  ];

  const footerItems = item?.map((el) => (
    <ul key={el.id}>
      <h4>{el.title}</h4>
      {el?.items?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ));

  return (
    <section id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer__col">
            <div className="image__wrapper">
              <div className="image__card">
                <img src={img1} alt="Image" />
                <p>Готовим вручную  и с любовью</p>
              </div>
              <div className="image__card">
                <img src={img2} alt="Image" />
                <p>Доставим в день заказа</p>
              </div>
              <div className="image__card">
                <img src={img3} alt="Image" />
                <p>100%  миндальная мука и натуральные ингредиенты</p>
              </div>
            </div>
            <h5>
              © 2021 Макароншоп ООО "Квантум", Санкт-Петербург, улица Маршала
              Тухачевского, дом 22
            </h5>
          </div>

          {footerItems}

          <div className="col">
            <h3>+7 (812) 309 82 88</h3>
            <div className="footer__icon">
              <div className="circle">
                <FaInstagram />
              </div>
              <div className="circle">
                <FaTelegramPlane />
              </div>
              <div className="circle">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
