import React from "react";
import "./index.scss";

const Model = ({ children, close }) => {
  return (
    <>
      <div onClick={() => close()} className="model__owerley"></div>
      {children}
    </>
  );
};

export default Model;
