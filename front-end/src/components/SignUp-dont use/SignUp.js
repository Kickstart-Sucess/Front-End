import React, { useState, useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

import "./SignUp.scss";

const initialForm = {
          username: "",
          password: "",
          age: "",
          email: "",
        }

const SignUp = () => {
    const history = useHistory()

    const [formState, setFormState] = useState(initialForm);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        axios
        .post("https://kickstarter-success-bw.herokuapp.com/api/auth/register")
        .then((res) => {
            console.log("success!", res.data);
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("userID", res.data.id);
            history.push("/")
            setFormState(initialForm);
        })
        .catch((err) => {
            console.error("registration failed", err)
        })
    }

    const inputChange = (e) => {
        e.persist();
        console.log("input changed!", e.target.value)
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.value
        }
        setFormState(newFormData);
    }


    return (
    <form className="signup-form" id="signup-container" onSubmit={formSubmit}>
  
  <h1 className="welcometitle">Welcome to KickStarter-Success!</h1>
  <h3 className="welcometitle">Please register for an account.</h3>
    <label htmlFor="username">
      Username
      <input
        className="signup-input"
        id="username"
        type="text"
        name="username"
        value={formState.username}
        onChange={inputChange}
      />
    </label>

    <label htmlFor="password">
      Password:
      <input
        className="signup-input"
        type="password"
        id="password"
        name="password"
        value={formState.password}
        onChange={inputChange}
      />
    </label>
    <label htmlFor="age">
      Age:
      <input
        className="signup-input"
        type="number"
        id="age"
        name="age"
        value={formState.age}
        onChange={inputChange}
      />
    </label>
    <label htmlFor="age">
      Email Address:
      <input
        className="signup-input"
        type="text"
        id="email"
        name="email"
        value={formState.email}
        onChange={inputChange}
      />
    </label>

    <button className="signup-btn"
      type="submit"
      onClick={(e) => formSubmit(e)}
    >
      Create Account
    </button>
    {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
  </form>
);
    
}

export default SignUp;