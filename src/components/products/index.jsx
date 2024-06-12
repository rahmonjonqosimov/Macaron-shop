import React, { useState } from "react";
import "./index.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

import {
  useGetProductsQuery,
  useGetCategoryProductsQuery,
} from "../../context/productApi";
import Model from "../model";
import Deatil from "../detail";
import Loading from "../loading";

const Products = () => {
  const [limit, setLimit] = useState(1);
  const [categoryItem, setCategoryItem] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  document.body.style.overflow = searchParams.get("detail") ? "hidden" : "auto";
  let path = categoryItem === "all" ? "" : `/category/${categoryItem}`;
  const { data, isLoading } = useGetProductsQuery({
    params: { limit: limit * 6 },
    path,
  });
  const { data: categoryList } = useGetCategoryProductsQuery();
  const category = categoryList?.map((el) => (
    <data
      onClick={(e) => setCategoryItem(e.target.value)}
      className={`category_item ${categoryItem === el ? "show" : ""}`}
      key={el}
      value={el}
    >
      {el}
    </data>
  ));
  const products = data?.products?.map((product) => (
    <div key={product?.id} className="product__card">
      <div
        onClick={() => setSearchParams({ detail: product?.id })}
        className="product__img"
      >
        <img src={product?.images[0]} alt={product?.title} />
      </div>
      <div className="product__detail">
        <h4 title={product?.title}>{product?.title}</h4>
        <p title={product?.description}>{product?.description}</p>
        <div className="product__price">
          <span>
            <FaDollarSign />
            {product?.price}
          </span>
          <button>
            <MdOutlineShoppingCart /> <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  ));
  const closeModel = () => {
    setSearchParams({});
  };
  return (
    <>
      {searchParams.get("detail") ? (
        <Model close={closeModel}>
          <Deatil id={searchParams.get("detail")} />
        </Model>
      ) : (
        <></>
      )}

      <div id="products">
        <div className="container">
          <h1>Готовые наборы</h1>
          {isLoading ? (
            <></>
          ) : (
            <div className="category__wrapper">
              <data
                className={`category_item ${
                  categoryItem === "all" ? "show" : ""
                }`}
                onClick={(e) => setCategoryItem(e.target.value)}
                value="all"
              >
                All
              </data>
              {category}
            </div>
          )}

          <div className="product__category"></div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="product__wrapper">{products}</div>
          )}

          <div className="see__more__btn">
            <button onClick={() => setLimit((p) => p + 1)}>Показать ещё</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
