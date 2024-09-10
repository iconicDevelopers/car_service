import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="adduser">
      <h3>Sign Up</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">User name : </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            autoComplete="off"
          />
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
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already Have a Account ?</p>
        <Link to={"/login"} type="submit" class="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
