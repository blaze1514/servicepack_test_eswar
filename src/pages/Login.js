import React, { useState } from "react";
import { validateEmail, validatePassword } from "../helper/validate";
import { Container, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { getUsers, setUser } from "../helper/localStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  // To login user
  const handleLogIn = () => {
    let emailCheck = validateEmail(email);
    let passwordCheck = validatePassword(password);
    if (emailCheck && passwordCheck) {
      let users = getUsers();
      if (users.length) {
        let obj = users.find((ele) => ele.email === email);
        if (obj && obj.password === password) {
          let a = setUser(obj);
          if (a) {
            setErrors("");
            window.location.href = "/";
          } else {
            setErrors("Login failed. Please try again");
          }
        } else {
          setErrors("password Incorrect");
        }
      } else {
        setErrors("please register user to login");
      }
    } else {
      setErrors("please enter valid email and password");
    }
  };

  return (
    <>
      <Link className="link-home" to="/">
        home
      </Link>
      <Container
        maxWidth="md"
        style={{ display: "flex", marginTop: "10%", justifyContent: "center" }}
      >
        <Card>
          <div className="btn-center">
            <h2 className="txt-center">Login</h2>
            <input
              className="input-register"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-register"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="input-register" onClick={handleLogIn}>
              Login
            </button>
            {error && error.trim() ? <p>{error}</p> : null}
            <br />
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Login;
