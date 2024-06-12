import React, { useState } from "react";
import "./index.scss";
import { Link, useSearchParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import logoTel from "../../assets/images/logo-tel.svg";

import { useGetSearchProductsQuery } from "../../context/productApi";
import Model from "../model";
import Deatil from "../detail";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { data } = useGetSearchProductsQuery({ value: searchValue });
  console.log(data);

  const topNavItems = [
    "Гарантия свежести",
    "Доставка и оплата",
    "Оптовые поставки",
    "Контакты",
  ];
  const topItems = topNavItems.map((el) => (
    <li key={el}>
      <Link to={"/"}>{el}</Link>
    </li>
  ));
  const closeModel = () => {
    setSearchParams({});
  };
  return (
    <>
      <section id="top__navbar">
        <div className="container">
          <div className="top__navbar">
            <ul>{topItems}</ul>
            <div className="nav__top-link">
              <div className={`serach ${searchValue.trim() ? "show" : ""}`}>
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="search"
                  placeholder="Search"
                />
                {searchValue.trim() ? (
                  <div className="search__item-1">
                    {searchValue.trim("") ? (
                      data?.products?.map((products) => (
                        <div
                          onClick={() => {
                            setSearchParams({ detail: products?.id }),
                              setSearchValue("");
                          }}
                          key={products.id}
                        >
                          <img src={products.images[0]} alt={products.title} />
                          <h5>{products.title}</h5>
                        </div>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="nav__icons">
                <Link to={"/"}>
                  <FaTelegramPlane />
                </Link>
                <Link to={"/"}>
                  <FaInstagram />
                </Link>
                <Link to={"/"}>
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bottom__navbar">
        <div className="container">
          <div className="top__navbar">
            <div
              onClick={() => setMenu((p) => !p)}
              className={`menu ${menu ? "show" : ""}`}
            >
              <div className="menu__item"></div>
              <div className="menu__item"></div>
              <div className="menu__item"></div>
            </div>
            <ul className={menu ? "show__menu" : ""}>
              <li>
                <Link to={"/"}>СЛАДКИЕ ДНИ</Link>
              </li>
              <li>
                <Link to={"/"}>подарочные наборы</Link>
              </li>
              <li>
                <Link to={"/"}>Собрать набор</Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img className="logo" src={logo} alt="Logo" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>Создать дизайн</Link>
              </li>
              <li>
                <Link to={"/"}>КОМПАНИЯМ</Link>
              </li>
              <li>
                <Link to={"/"}>ВЕСЬ КАТАЛОГ</Link>
              </li>
            </ul>
            <img src={logoTel} alt="Logo" className="logo__tel" />
            <button className="cart">
              <MdOutlineShoppingCart />
            </button>
          </div>
        </div>
        <div className="serach">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </div>
        {searchValue.trim("") ? (
          <div className="search__item">
            {searchValue.trim("") ? (
              data?.products?.map((products) => (
                <div
                  onClick={() => {
                    setSearchParams({ detail: products?.id }),
                      setSearchValue("");
                  }}
                  key={products.id}
                >
                  <img src={products.images[0]} alt={products.title} />
                  <h5>{products.title}</h5>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </section>
      {searchParams.get("detail") ? (
        <Model close={closeModel}>
          <Deatil id={searchParams.get("detail")} />
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
