import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  skill: "",
  grade: "",
};

let cosholasticSchema = yup.object({
  skill: yup.string().required("Please select skill"),
  grade: yup.string().required("Kindly provide Grade"),
});

function NewFrom() {
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: cosholasticSchema,
      onSubmit: (values, action) => {
        postData()
        action.resetForm();
      },
    });  
  const [db, setDb] = useState(null);

  const postData = async () => {
    const response = await axios.put(
      `http://localhost:3000/secondpart/${values.skill}`,
      {
        subject: db.filter((item) => item.id == values.skill)[0].subject,
        grade: values.grade,
      }
    );
    if (response.status === 200) {
     
      res();
    }
  };

 
  useEffect(() => {
    res();
  }, []);

  const res = async () => {
    let resp = await axios.get("http://localhost:3000/secondpart");
    setDb(resp.data);
    
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="ml-5 mt-5">
        <Form.Group as={Row} className="mb-3" controlId="formGridState">
          <Form.Label column sm={2}>
            Skills
          </Form.Label>
          <Col sm={3}>
            <Form.Select
              defaultValue="Choose..."
              name="skill"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.skill}
              allowClear
            >
              {db &&
                db.map(
                  (item) =>
                    !item.grade && (
                      <option key={Math.random()} value={item.id}>
                        {item.subject}
                      </option>
                    )
                )}
            </Form.Select>
            {errors.skill && touched.skill ? (
              <p className="text-danger">{errors.skill}</p>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="string">
          <Form.Label column sm={2}>
            Grade
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="string"
              placeholder="Enter Grade"
              name="grade"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.grade}
            />
            {errors.grade && touched.grade ? (
              <p className="text-danger">{errors.grade}</p>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 5, offset: 0 }}>
            <Button
              type="submit"

              className="px-4"
              variant="btn btn-outline-primary"
            >
              Add
            </Button>
          </Col>
        </Form.Group>
      </Form>
      
    </div>
  );
}

export default NewFrom;


