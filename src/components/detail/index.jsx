import React from "react";
import "./index.scss";
import { useGetDetailProductQuery } from "../../context/productApi";
import Loading from "../loading/index";

const Deatil = ({ id }) => {
  const { data, isLoading } = useGetDetailProductQuery({ id: id });
  console.log(data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section id="detail">
          <div className="detail__image">
            <img src={data?.images[0]} alt={data?.title} />
          </div>
          <h4>{data?.title}</h4>
          <p>{data?.description}</p>
        </section>
      )}
    </>
  );
};

export default Deatil;
