import React from "react";
import "./Login.css";

import { Textfield } from "./Textfield.js";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login(props) {
  function handleClick() {
    let toggle = document.querySelector(".signup");
    toggle.style.visibility = "hidden";
  }

  const validate = Yup.object({
    firstName: Yup.string()
      .max(12, "Must be 12 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(12, "Must be 12 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .min(6, "Must be 6 characters or more")
      .required("Required"),
    password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password does not match")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        axios
          .post("/signup", values)
          .then((res) => {
            console.log(res);
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
          className="popup-actual signup"
          style={
            props.show ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          {/* {console.log(formik.values)} */}
          <img
            className="cross"
            src="/images/cross.png"
            onClick={handleClick}
            alt="close"
          ></img>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>

          <Form>
            <Textfield
              label="First Name"
              name="firstName"
              type="text"
            ></Textfield>
            <Textfield
              label="Last Name"
              name="lastName"
              type="text"
            ></Textfield>
            <Textfield label="Email" name="email" type="email"></Textfield>
            <Textfield
              label="Password"
              name="password"
              type="password"
            ></Textfield>
            <Textfield
              label="Confirm Password"
              name="password"
              type="password"
            ></Textfield>
            <button
              class="btn btn-success mt-3"
              type="submit"
              onClick={handleClick}
            >
              Register
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Login;
