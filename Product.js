import React from 'react'
// rfc: shortcut  to create component
 // props components are read-only components. In ReactJS, the data can be passed from one component to another component using these props, similar to how the arguments are passed in a function
export default function Product(props) {
    console.log(props);
    function f1() {
      //alert("Clicked!");
      // any incoming data are unchangable by using props.price  it will give error
      props.price = 2000;
    }
  return (
    // <div>Product</div>
      // perfom event handling on button click
      // whatever we want to print on screen we have to write this in return
      
    <div>
      <h2>{props.price}</h2>
      <p>{props.name}</p>
      <button onClick={f1}>Add to cart</button>
    </div>
  );
}


