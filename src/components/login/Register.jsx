import React from 'react'



const registerSchema = Yup.object({
    name:Yup.string().required("Kindly give Name here"),
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
function Register() {
  return (
    <div className="App">
    <div className="App-header">
      <Form>
        <h3 className="text-primary text-center mb-4">Please Register Here</h3>
        <Form.Group
          className="shadow p-5 mb-1 bg-body rounded"
          controlId="formBasicEmail"
        >
                     <Form.Label className="mt-3">
            <h5>Full Name </h5>
          </Form.Label>
          <Form.Control
            className={
              !errors.email && touched.email
                ? "text-success"
                : "text-secondary"
            }
            type="text"
            name="name"
            values=""
            placeholder="Enter Full Name"
            allowClear
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && touched.name ? (
            <p className="text-danger" style={{ fontSize: "18px" }}>
              {errors.name}
            </p>
          ) : null}

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
  )
}

export default Register