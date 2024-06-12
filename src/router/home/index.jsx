import React from "react";
import Products from "../../components/products";
import { useGetProductsQuery } from "../../context/productApi";

const Home = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default Home;
