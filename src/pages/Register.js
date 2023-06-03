import React, { useState } from "react";
import { validateEmail, validatePassword } from "../helper/validate";
import { Container, Card } from "@mui/material";
import { setUsers } from "../helper/localStorage";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    register: null,
  });

  // To register user
  const handleRegistration = () => {
    let emailCheck = validateEmail(email);
    let passwordCheck = validatePassword(password);
    if (emailCheck && passwordCheck) {
      const userData = {
        email,
        dateOfBirth,
        contactNumber,
        password,
      };
      setErrors({
        email: null,
        password: null,
      });
      let a = setUsers(userData);
      if (a) {
        setErrors({
          register: null,
        });
        window.location.href = "/login";
      } else {
        setErrors({
          register: "failed to register please try again",
        });
      }
    } else {
      setErrors({
        email: emailCheck === false ? "Please enter a valid email" : null,
        password:
          passwordCheck === false
            ? "password must contain minimum 8 letters"
            : null,
      });
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
            <h2 className="txt-center">Register</h2>
            <input
              className="input-register"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email ? <p>{errors.email}</p> : null}
            <input
              className="input-register"
              type="date"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <input
              className="input-register"
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <input
              className="input-register"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password ? <p>{errors.password}</p> : null}
            <button className="input-register" onClick={handleRegistration}>
              Register
            </button>
            <br />
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Register;
