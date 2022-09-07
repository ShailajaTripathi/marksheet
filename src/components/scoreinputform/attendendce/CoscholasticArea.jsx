import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Modal } from "antd";

let cosholasticSchema = yup.object({
  skill: yup.string().required("Please select skill"),
  grade: yup.string().max(2).min(1).required("Kindly provide Grade"),
});
function CoscholasticArea({
  status,
  setStatus,
  data,
  edit,
  disable,
  setDisable,
  setEdit,
}) {
  const [db, setDb] = useState(null);
  const initialValues = {
    skill: edit ? data.id : "",
    grade: edit ? data.grade || "" : "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: initialValues,
      validationSchema: cosholasticSchema,
      onSubmit: (values, action) => {
        postData(values);
        action.resetForm();
        reloadPage();
      },
    });

  const postData = async (e) => {
    console.log("eeee", e);
    const sub = db.filter((a) => a.id == e.skill);
    console.log("aa", sub);
    const response = await axios.put(
      `https://scorejson.herokuapp.com/secondpart/${e.skill}`,
      {
        subject: sub[0].subject,
        grade: e.grade,
      }
    );
    if (response.status === 200) {
      res();
      setStatus(false);
      setDisable(false);
      setEdit(false);
    }
    console.log(values);
  };
  function updateData() {
    // console.log("Updated");
    // console.log(values);
  }
 
  useEffect(() => {
    res();
  }, []);

  const res = async () => {
    let resp = await axios.get("https://scorejson.herokuapp.com/secondpart");
    setDb(resp.data);
  };

  const handleOk = () => {
    setStatus(false);
    setDisable(false);
    setEdit(false);
  };

  const handleCancel = () => {
    setStatus(false);
    setDisable(false);
    setEdit(false);
  };
  const reloadPage = () => {
    window.location.reload();
  };
  
  return (
    <div>
      <Modal
        title="Part-II Co-scholastic Area"
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
                value={values.skill || data.id}
                onChange={handleChange}
                onBlur={handleBlur}
                allowClear
                disabled={disable}
              >
                {edit ? (
                  <>
                    <option>Choose Skill..</option>
                    {db &&
                      db.map((item) => (
                        <option key={Math.random()} value={item.id}>
                          {item.subject}
                        </option>
                      ))}
                  </>
                ) : (
                  <>
                    <option>Choose Skill..</option>
                    {db &&
                      db.map(
                        (item) =>
                          !item.grade && (
                            <option key={Math.random()} value={item.id}>
                              {item.subject}
                            </option>
                          )
                      )}
                  </>
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
                onClick={updateData}
              >
                {edit && data.grade ? "Update Marks" : "Add Marks"}
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal>
    </div>
  );
}
export default CoscholasticArea;
