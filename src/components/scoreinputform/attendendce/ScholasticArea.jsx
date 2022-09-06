import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Modal } from "antd";

let scholasticSchema = yup.object({
  subject: yup.string().required("Please select Subject"),
  fa: yup
    .number()
    .min(0, "Min value 0.")
    .max(40, "Max value 40.")
    .required("Kindly provide FA Marks"),
  oralf: yup
    .number()
    .min(0, "Min value 0.")
    .max(10, "Max value 10.")
    .required("Kindly enter Oral Marks"),
  sa: yup
    .number()
    .min(0, "Min value 0.")
    .max(40, "Max value 40.")
    .required("Please give SA Marks"),
  orals: yup
    .number()
    .min(0, "Min value 0.")
    .max(10, "Max value 10.")
    .required("Kindly fill Oral Marks"),
});

function ScholasticArea({
  status,
  setStatus,
  data,
  edit,
  setGrandTotal,
  grandTotal,
  disble,
  setDisble,
  setEdit,
}) {
  console.log("data", data);
  const initialValues = {
    subject: edit ? data.id || "" : "",
    fa: edit ? data.fa || "" : "",
    oralf: edit ? data.oralf || "" : "",
    sa: edit ? data.sa || "" : "",
    orals: edit ? data.orals || "" : "",
    id: edit ? data.id || "" : "",
  };

  // console.log({ initialValues });
  const [db, setDb] = useState(null);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: initialValues,
      validationSchema: scholasticSchema,
      onSubmit: (values) => {
        // console.log("values", values);
        postData(values);
      },
    });

  const postData = async (e) => {
    console.log("db", db);
    console.log("e", e);
    const id = edit ? e.id : e.subject;
    const sub = db.filter((a) => a.id == e.subject);
    console.log("sub", sub);
    let totalMarks = values.fa + values.oralf + values.sa + values.orals;

    const response = await axios.put(`https://scorejson.herokuapp.com/firstpart/${id}`, {
      subject: sub[0].subject,
      fa: e.fa,
      oralf: e.oralf,
      sa: e.sa,
      orals: e.orals,
      total: totalMarks,
    });
    if (response.status === 200) {
      res();
      setDisble(false);
      setStatus(false);
      setEdit(false);
    }
  };

  useEffect(() => {
    res();
  }, []);

  function updateData() {
    // console.log("Updated");
    // console.log(values);
    postData();
  }
  const res = async () => {
    let resp = await axios.get("https://scorejson.herokuapp.com/firstpart");
    setDb(resp.data);
  };

  const handleOk = () => {
    setStatus(false);
    setDisble(false);
    setEdit(false);
  };

  const handleCancel = () => {
    setStatus(false);
    setDisble(false);
    setEdit(false);
  };

  return (
    <div>
      <Modal
        title="Part-I Scholastic Area"
        visible={status}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formGridState">
            <Form.Label column sm={3}>
              Subject
            </Form.Label>
            <Col sm={8}>
              <Form.Select
                defaultValue="Choose..."
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                allowClear
                disabled={disble}
              >
                {edit ? (
                  <>
                    <option>Choose Subject..</option>
                    {db &&
                      db.map((item) => (
                        <option key={Math.random()} value={item.id}>
                          {item.subject}
                        </option>
                      ))}
                  </>
                ) : (
                  <>
                    <option>Choose Subject..</option>
                    {db &&
                      db.map(
                        (item) =>
                          !item.fa && (
                            <option key={Math.random()} value={item.id}>
                              {item.subject}
                            </option>
                          )
                      )}
                  </>
                )}
                <option>Choose Subject..</option>
                {db &&
                  db.map(
                    (item) =>
                      !item.fa && (
                        <option key={Math.random()} value={item.id}>
                          {item.subject}
                        </option>
                      )
                  )}
              </Form.Select>
              {errors.subject && touched.subject ? (
                <p className="text-danger">{errors.subject}</p>
              ) : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="string">
            <Form.Label column sm={3}>
              FA Marks
            </Form.Label>
            <Col sm={8}>
              
              <Form.Control
                type="number"
                placeholder="Marks out of 40"
                name="fa"
                value={values.fa}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.fa && touched.fa ? (
                <p className="text-danger">{errors.fa}</p>
              ) : null}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="string">
            <Form.Label column sm={3}>
              First Oral
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="Marks out of 10"
                name="oralf"
                value={values.oralf}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.oralf && touched.oralf ? (
                <p className="text-danger">{errors.oralf}</p>
              ) : null}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="string">
            <Form.Label column sm={3}>
              SA Marks
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="Marks out of 40"
                name="sa"
                value={values.sa}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.sa && touched.sa ? (
                <p className="text-danger">{errors.sa}</p>
              ) : null}
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="string">
            <Form.Label column sm={3}>
              Second Oral
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="Marks out of 10"
                name="orals"
                value={values.orals}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.orals && touched.orals ? (
                <p className="text-danger">{errors.orals}</p>
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
                Add
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal>
    </div>
  );
}

export default ScholasticArea;
