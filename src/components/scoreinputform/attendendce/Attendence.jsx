import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Modal } from "antd";

let attendenceSchema = yup.object({
  term: yup.string().required("Select Term"),
  workingDays: yup
    .number()
    .max(365, "Please fill days within a year")
    .required("Set Working Days"),
  presentDays: yup
    .number()
    .required("Invalid Present Days")

    .test({
      message: "Should be less than or equal to working days",
      test: function (value) {
        return value <= parseInt(this.parent.workingDays);
      },
    }),
});

function Attendence({
  status,
  setStatus,
  data,
  edit,
  disable,
  setDisable,
  setEdit,
}) {
  // console.log("daat", data);
  const initialValues = {
    workingDays: edit ? data.workingDays || "" : "",
    presentDays: edit ? data.presentDays || "" : "",
    term: edit ? data.id : "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: initialValues,
      validationSchema: attendenceSchema,
      onSubmit: (values) => {
        postData(values);
        // reloadPage();
      },
    });
  const [db, setDb] = useState(null);


  const postData = async (e) => {
    const te = db.filter((a) => a.id == e.term);
    // console.log("essss", te);
    const response = await axios.put(
      `https://scorejson.herokuapp.com/thirdpart/${e.term}`,
      {
        term: te[0].term,
        workingDays: e.workingDays,
        presentDays: e.presentDays,
      }
    );

    if (response.status === 200) {
      res();
      setStatus(false);
      setDisable(false);
      setEdit(false);
    }
  };

  const deleteData = async () => {
    await axios.put(`https://scorejson.herokuapp.com/thirdpart/${data.id}`, {
      term: data.term,
      workingDays: "",
      presentDays: "",
    });
  };

  useEffect(() => {
    res();
  }, []);
  const handleOk = () => {
    setStatus(false);
    setEdit(false);
  };

  const handleCancel = () => {
    setStatus(false);
    setDisable(false);
    setEdit(false);
  };
  function updateData() {
    postData();
  }
  const res = async () => {
    let resp = await axios.get("https://scorejson.herokuapp.com/thirdpart");
    setDb(resp.data);
  };

  return (
    <div>
      <Modal
        title="Part - III Attendence"
        visible={status}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formGridState">
            <Form.Label column sm={3}>
              Term
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                defaultValue="Choose.."
                name="term"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.term || data.id}
                allowClear
                disabled={disable}
              >
                {edit ? (
                  <>
                    <option>Choose Term..</option>
                    {db &&
                      db.map((item) => (
                        <option key={Math.random()} value={item.id}>
                          {item.term}
                        </option>
                      ))}
                  </>
                ) : (
                  <>
                    <option>Choose Term..</option>
                    {db &&
                      db.map(
                        (item) =>
                          !item.workingDays && (
                            <option key={Math.random()} value={item.id}>
                              {item.term}
                            </option>
                          )
                      )}
                  </>
                )}
              </Form.Select>
              {errors.term && touched.term ? (
                <p className="text-danger">{errors.term}</p>
              ) : null}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="number">
            <Form.Label column sm={3}>
              Working Days
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                placeholder="Set working Days"
                name="workingDays"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.workingDays}
              />
              {errors.workingDays && touched.workingDays ? (
                <p className="text-danger">{errors.workingDays}</p>
              ) : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="number">
            <Form.Label column sm={3}>
              Present Days
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="Number"
                placeholder="Fill Present Days"
                name="presentDays"
                value={values.presentDays}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.presentDays && touched.presentDays ? (
                <p className="text-danger">{errors.presentDays}</p>
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
                {edit && data.workingDays ? "Update Marks" : "Add Marks"}
              </Button>
            </Col>
            <Col sm={{ span: 5, offset: 0 }}>
              {edit && data.workingDays ? (
                <Button
                  type="submit"
                  className="px-4"
                  variant="btn btn-outline-danger"
                  onClick={deleteData}
                >
                  Remove Marks
                </Button>
              ) : (
                <p></p>
              )}
            </Col>
          </Form.Group>
        </Form>
      </Modal>
    </div>
  );
}

export default Attendence;
