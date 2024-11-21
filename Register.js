import React, { useEffect, useState } from 'react'
 // rfc: shortcut for creating import  and export part
export default function Register() {
  var [count, setcount] = useState(100);
  var [name, setname] = useState("Ashmol");

  //. when you visited the component useEffect hook get called
  // IF WE  are changing state variable then useEffect  hook will be recalled again
//   useEffect(() => {
//     console.log("useEffect", count, name);
    //   });
    

    // This useEffect with empty array it is calles only ones
        //  useEffect(() => {
        // console.log("useEffect", count, name);
        //  },[]);

      // this is useEffect with conditional variable i.e, name
    //  useEffect(() => {
    //    console.log("useEffect", count, name);
    //  }, [name]);
    


    // this is useEffect with destructor function
 useEffect(() => {
     console.log("useEffect", count, name);
     return () => {
         console.log("I am leaving")
     }
 }, []);
    

  function f1() {
    // alert("Register");
    setcount(count + 100);
  }
  function f2() {
    // alert("Register");
    setname("Ashuni");
  }
  return (
    <div className="container">
      <h1>State Variable</h1>
      <p>{count}</p>
      <button onClick={f1}>Submit</button>
      <p>{name}</p>
      <button onClick={f2}>Change</button>
    </div>
    // <div>Register</div>
  );
}
