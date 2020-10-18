import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../api/axiosWithAuth";

class LogIn extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("https://kickstarter-success-bw.herokuapp.com/api/auth/login", this.state.credentials)
      .then((res) => {
        console.log("ko: Login.js: login: res: ", res);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("userID", res.data.id);
        this.props.history.push("/Dashboard");
      })
      .catch((err) => {
        if (err.response) {
          console.error(
            "Login.js: login failed: response from server: ",
            err.response.data
          );
        } else {
          console.error("Login.js: login failed: err: ", err);
        }
      });
  };

  render() {
    return (
      <div>
        <h1>Welcome Back!</h1>
        <h3>Please Sign In</h3>
        <form onSubmit={this.login}>
        <label>Username:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          </label>
          <label> Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          </label>
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default LogIn;