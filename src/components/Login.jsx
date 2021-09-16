import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import { Textfield } from "./Textfield.js";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login(props) {
  const closeIcon = <FontAwesomeIcon icon={faWindowClose} />;
  // const [responseFromServer, setResponseFromServer] =
  //   React.useState("loading...");

  function handleClick() {
    let toggle = document.querySelector(".login");
    toggle.style.visibility = "hidden";
  }

  function handleSignupClick() {
    handleClick();
    let x = document.querySelector(".signup");
    x.style.visibility = "visible";
  }

  const validate = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .min(6, "Must be 6 characters or more")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        axios
          .post("/login", values)
          .then((res) => {
            console.log(res);
            // return setResponseFromServer(res.data);
          })
          .catch((err) => {
            console.log("nahin hora bhai", err);
          });

        console.log(values);
        resetForm();
      }}
    >
      {(formik) => (
        <div
          style={
            props.show ? { visibility: "visible" } : { visibility: "hidden" }
          }
          className="popup-actual login"
        >
          <button className="btn ml-10" onClick={handleClick}>
            {closeIcon}
          </button>

          <h1 className="my-4 font-weight-bold-display-4">Log in</h1>
          <Form>
            <Textfield
              label="E-mail"
              name="email"
              type="email"
              text="Enter your e-mail id"
            />
            <Textfield label="Password" name="password" type="password" />
            <div className="mb-3 form-check">
              <a href="" id="forget">
                Forget Password
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                handleSignupClick();
              }}
            >
              Sign up
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Login;
