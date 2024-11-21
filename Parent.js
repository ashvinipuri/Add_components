import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";

export default function Parent(data) {

    var [Category, setcategory] = useState();
  function parentfun(data) {
      console.log("Parent fun called!", data);
      setcategory(data);
  }
  return (
    <div className="container">
      <h1>State lift example</h1>
      <div className="row">
        <div className="col-3">
                  <Left p1={parentfun} />
        </div>
        <div className="col-9">
                  <Right p2={Category} />
        </div>
      </div>
    </div>
  );
}
