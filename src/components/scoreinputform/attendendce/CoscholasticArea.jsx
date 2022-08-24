import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import data from "../../../db.json";
import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function CoscholasticArea() {
  const [form] = Form.useForm();
  const [db, setDb] = useState(null);
  const [state, setState] = useState({
    subject: null,
    grade: null,
    id: null,
  });

  const postData = async () => {
    const response = await axios.put(
      `http://localhost:3000/secondpart/${state.id}`,
      {
        subject: db.filter((item) => item.id === state.id)[0].subject,
        grade: state.grade,
      }
    );
    if (response.status === 200) {
      setState({
        subject: null,
        grade: null,
        id: null,
      });
      form.resetFields();
      res();
    }
  };

  const handleClick = (e) => {
    postData();
  };
  useEffect(() => {
    res();
  }, []);

  const res = async () => {
    let resp = await axios.get("http://localhost:3000/secondpart");
    setDb(resp.data);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      skill: "Development & Maturity",
      grade: "A+",
    });
  };

  return (
    <div>
      {/* <h3> Part-II : Co- Scholastic Areas</h3> */}
      <Space>
        <Form {...layout} form={form} name="control-hooks">
          <Form.Item
            name="skill"
            label="Skill"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a skill"
              value={state.id}
              onSelect={(e) =>
                setState((prev) => {
                  return { ...prev, id: e };
                })
              }
              allowClear
            >
              {db &&
                db.map(
                  (item) =>
                    !item.grade && (
                      <Option key={Math.random()} value={item.id}>
                        {item.subject}
                      </Option>
                    )
                )}
            </Select>
          </Form.Item>
          <Form.Item
            name="grade"
            label="Grade"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={state.grade}
              onChange={(e) =>
                setState((prev) => {
                  return { ...prev, grade: e.target.value };
                })
              }
            />
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) =>
                      setState((prev) => {
                        return { ...prev, orals: e.target.value };
                      })
                    }
                  />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 12 }}
              onClick={handleClick}
            >
              Add Grade
            </Button>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginTop: 8 }}
            >
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
}
export default CoscholasticArea;
