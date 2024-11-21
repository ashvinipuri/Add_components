import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid header">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link class="nav-link" to="/loginpage">
              Login
            </Link>
            <Link class="nav-link" to="/registerpage">
              Register
            </Link>
            <Link class="nav-link" to="/contentpage">
              Content
            </Link>
            <Link class="nav-link" to="/productpage">
              Products
            </Link>
            <Link class="nav-link" to="/class1">
              Class1
            </Link>
            <Link class="nav-link" to="/class2">
              Class2
            </Link>
            <Link class="nav-link" to="/class3">
              Class3
            </Link>
            <Link class="nav-link" to="/class4">
              Class4
            </Link>
            <Link class="nav-link" to="/propsdrilling">
              propsdrilling&contextapi
            </Link>
            <Link class="nav-link" to="/parent1">
              Parent1
            </Link>
            <Link class="nav-link" to="/parent2">
              Parent2
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
