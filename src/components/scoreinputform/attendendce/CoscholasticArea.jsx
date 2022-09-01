import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useFormik } from "formik";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { Modal } from "antd";

const initialValues = {
  skill: "",
  grade: "",
};

let cosholasticSchema = yup.object({
  skill: yup.string().required("Please select skill"),
  grade: yup.string().max(2).min(1).required("Kindly provide Grade"),
});
function CoscholasticArea({status,setStatus,data,edit}) {
  console.log("data",edit);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: cosholasticSchema,
      onSubmit: (values, action) => {
        postData();
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
    console.log(values);
  };

  useEffect(() => {
    res();
  }, []);

  const res = async () => {
    let resp = await axios.get("http://localhost:3000/secondpart");
    setDb(resp.data);
  };
  const handleOk = () => {
    setStatus(false)
  };

  const handleCancel = () => {
    setStatus(false)
  };
  return (
    <div>
      <Modal
          title="update"
          visible={status}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formGridState">
              <Form.Label column sm={2}>
                Skills
              </Form.Label>
              <Col sm={8}>
                <Form.Select
                 
                  name="skill"
                  onChange={handleChange}
                  onBlur={handleBlur}
                   value={values.skill}
                  // value ={data.subject}
                  allowClear
                >
                  <option>Choose Skill..</option>
                  { !edit db &&
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
              <Col sm={8}>
                <Form.Control
                  type="string"
                  placeholder="for ex. A+ / A / B etc.."
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
          </Modal>
      
    </div>
  );
}

export default CoscholasticArea;
