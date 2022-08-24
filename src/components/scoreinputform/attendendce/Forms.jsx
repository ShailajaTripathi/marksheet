<<<<<<< HEAD
import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

  let signUpSchema= yup.object().shape({
	name: yup.string().required("fill it name"),
	// age: yup.number().required().positive().integer(),
	email: yup.string().email().required("fill it email"),
	phone: yup.string().required("fill it phone"),
  });

function Forms() {
  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
  
  initialValues: initialValues,
 validationSchema:signUpSchema,
    onSubmit: (values,action) => {
      console.log(values);
action.resetForm();
    },
  });
// console.log(errors)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
		{errors.name &&touched.name ?(<p>{errors.name}</p>):null}
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
		{errors.email &&touched.email ?(<p>{errors.email}</p>):null}
        <br />
        <label>
          Phone number:
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
		{errors.phone && touched.phone?(<p>{errors.phone}</p>):null}
        <input type="submit" value="Submit" />
      </form>
=======
import React from 'react'

function Forms() {
  return (
    <div>

>>>>>>> 1aa7963f64475ce4757c313e99cce70fd605a0af
    </div>
  );
}

export default Forms;
