import React from "react";
import Product from "./Product";
function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3">
          <Product name="Nike" price="5500" />
        </div>
        <div className="col-xl-3">
          <Product name="Puma" price="8000" />
        </div>
        <div className="col-xl-3">
          <Product name="Adidas" price="4570" />
        </div>
        <div className="col-xl-3">
          <Product name="Spark" price="6500" />
        </div>
      </div>
    </div>
  );
}
export default Content;
