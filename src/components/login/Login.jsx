import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please Provide Email"),
  pswd: Yup.string()
    .required("Please provide a valid password")
    .required("Kindly Enter Password")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/\d+/, "One number")
    .min(4, "Password is too short - should be 4 chars minimum.")
    .max(10, "must be less then 10"),
});
function Login() {
  const initialValues = {
    email: "",
    pswd: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: () => {},
    });
  return (
    <div className="App">
      <div className="App-header">
        <Form>
          <h3 className="text-primary text-center mb-4">Login</h3>
          <Form.Group
            className="shadow p-5 mb-1 bg-body rounded"
            controlId="formBasicEmail"
          >
            <Form.Label className="mt-3">
              <h5>Email </h5>
            </Form.Label>
            <Form.Control
              className={
                !errors.email && touched.email
                  ? "text-success"
                  : "text-secondary"
              }
              type="email"
              name="email"
              values=""
              placeholder="Enter email"
              allowClear
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className="text-danger" style={{ fontSize: "18px" }}>
                {errors.email}
              </p>
            ) : null}
            <Form.Label className="mt-3">
              <h5>Password</h5>
            </Form.Label>
            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Enter Password"
              values=""
              name="pswd"
              allowClear
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.pswd && touched.pswd ? (
              <p className="text-danger" style={{ fontSize: "18px" }}>
                {errors.pswd}
              </p>
            ) : null}
          </Form.Group>

          <div className="col-md-12 text-center">
            <Button
              variant="btn btn-outline-primary"
              type="submit"
              disabled={
                (values.email && values.email.length == 0) ||
                errors.email != undefined ||
                values.pswd.length == 0 ||
                errors.pswd != undefined
              }
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
