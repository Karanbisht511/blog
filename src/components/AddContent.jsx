import React from "react";

import { Textfield } from "./Textfield.js";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddContent(props) {
    function handleClick() {
        let toggle = document.querySelector(".signup");
        toggle.style.visibility = "hidden";
      }
  

//   fileSelectedHandler = event =>{
//       console.log(event);
//   }

  const validate = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    title: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    domain: Yup.string().max(20,"Please enter the correct spelling from above domains").required("Domain is Required"),
    content: Yup.string()
      .max(1000, "Only 10000 characters allowed")
      .required("Required"),
    
  });

  return (
    <Formik
      initialValues={{
        userName: "",
        title: "",
        domain: "",
        content: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        axios
          .post("/insertPost", values)
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
          <h1 className="my-4 font-weight-bold-display-4">Add Content</h1>

          <Form>
            <Textfield
              label="Username"
              name="userName"
              type="text"
            ></Textfield>
            <Textfield
              label="Title"
              name="title"
              type="text"
            ></Textfield>
            <Textfield label="Domain" name="domain" type="text"></Textfield>
            <Textfield
              label="Content"
              name="content"
              type="text"
            ></Textfield>
            {/* <input type="file" onChange={fileSelectedHandler}/> */}
            <button
              class="btn btn-success mt-3"
              type="submit"
              onClick={handleClick}
            >
              Post
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default AddContent;
