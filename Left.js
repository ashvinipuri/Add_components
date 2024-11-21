import React from 'react'

export default function Left(prop) {
    function f1(value) {
        console.log(value);
        prop.p1(value);
    }
  return (
    <div>
      <ul>
        <li
          onClick={() => {
            f1("Category 1");
          }}
        >
          Category 1
        </li>
        <li
          onClick={() => {
            f1("Category 2");
          }}
        >
          Category 2
        </li>
      </ul>
    </div>
  );
}
