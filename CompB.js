import React from "react";
import CompC from "./CompC";

export default function CompB(props) {
  return (
    <>
      <div>CompB,{props.p1}</div>
      <CompC p2={props.p1} />
      {/*  C compoent is a child of B component  */}
      {/*  (A data pass to it  happen  in Comp-A) B data pass to C data */}
    </>
  );
}
