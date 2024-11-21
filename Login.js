import { useRef } from "react";
import React from 'react'
 // rfc: shortcut for create data in component(home,login,register) 1st letter should be capital when u make file in compoonent folder
export default function Login() {
    let x1 = useRef();
    let x2 = useRef();
    let x3 = useRef();

    function f1() {
        //alert("Login success")
        // console.log(x1);
        // console.log(x2);
        // console.log(x1.current.value);

        var data = {
            name: x1.current.value,
            age: x2.current.value,
            place: x3.current.value,
        };
        // console.log(data);
        data = JSON.stringify(data);
        // console.log(data);

        fetch("http://localhost:9000/users", {
            method: "Post",
            body: data,   // where we pass our json data usimg post method
            headers: { "content-type": "application/json" }
        })
            .then(function (result) {
            console.log(result)
        })
            .catch(function (err) {
            console.log(err);
        });
        
    }

    return (
      <div className="container">
        <h1>Login Form</h1>
        <input type="text" ref={x1} placeholder="name" />
        <br />
        <input type="text" ref={x2} placeholder="age" />
        <br />
        <input type="text" ref={x3} placeholder="place" />
        <br />
        <br />
        <button onClick={f1}>Login</button>
        <p></p>
        <p></p>
      </div>
      //     <div>Login</div>
    );
}
