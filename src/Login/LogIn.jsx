import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <div className="adduser">
      <h3>Sign In</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            placeholder="Enter Your Email"
            autoComplete="off"
          />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            autoComplete="off"
          />
          <button type="submit" class="btn btn-primary">
            LogIn
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't Have Account ?</p>
        <Link to={"/"} type="submit" class="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
