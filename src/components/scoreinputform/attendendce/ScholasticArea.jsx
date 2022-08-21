import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import data from "../../../db.json";
import axios from "axios";
import { Button, Form, Input, Space, Select } from "antd";
const { Option } = Select;

function ScholasticArea() {

  const { firstpart } = data;
  const [form] = Form.useForm();
  const [db, setDb] = useState(null);
  const [state, setState] = useState({
    fa: null,
    oralf: null,
    sa: null,
    orals: null,
    id: null,
  });

  const postData = async () => {
    let totalMarks =
      parseInt(state.fa) +
      parseInt(state.oralf) +
      parseInt(state.sa) +
      parseInt(state.orals);
    const response = await axios.put(
      `http://localhost:3000/firstpart/${state.id}`,
      {
        subject: db.filter(item => item.id === state.id)[0].subject,
        fa: parseInt(state.fa),
        fmarks: parseInt(state.oralf),
        sa: parseInt(state.sa),
        smarks: parseInt(state.orals),
        total: totalMarks,
      }
    );

    if (response.status === 200) {
      setState({
        fa: null,
        oralf: null,
        sa: null,
        orals: null,
        id: null,
      });
      form.resetFields()
      res();

    }
  };

  useEffect(() => {
    
    res();
  }, []);

  const res = async () => {
    let resp = await axios.get("http://localhost:3000/firstpart");
    setDb(resp.data);
  };
  

  return (
    <div>
      {/* <h3> Part-I: Scholastic Areas</h3> */}
      <Space>
        <Form
          form={form}
          initialValues={{
            layout: "horizontal",
          }}
        >
          <Form.Item
            name="subject"
            label="Subject"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a Subject"
              allowClear
              value={state.id}
              onSelect={(e) =>
                setState((prev) => {
                  return { ...prev, id: e };
                })
              }
            >
              {db &&
                db.map(
                  (item) =>
                    !item.fa && (
                      <Option key={Math.random()} value={item.id}>
                        {item.subject}
                      </Option>
                    )
                )}
            </Select>
          </Form.Item>
          <Form.Item
            name="fa"
            label="FA"
           
            rules={[
              {
                required: true,
              },
              {
                maxLength: 40,
                message: "Value should be less than 40",
              },
            ]}
          >
            <Input
              placeholder="Out of 40"
              value={state.fa}
              min={1} max={10}
              onChange={(e) =>
                setState((prev) => {
                  return { ...prev, fa: e.target.value };
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="oralf"
            label="Oral"
            rules={[
              {
                required: true,
              },
              {
                maxLength: 10,
                message: "Value should be less than 10",
              },
            ]}
          >
            <Input
              placeholder="Out of 10"
              value={state.oralf}
               onChange={(e) =>
                setState((prev) => {
                  return { ...prev, oralf: e.target.value };
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="sa"
            label="SA"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Out of 40"
              value={state.sa}
              onChange={(e) =>
                setState((prev) => {
                  return { ...prev, sa: e.target.value };
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="orals"
            label="Oral"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Out of 10"
              value={state.orals}
              onChange={(e) =>
                setState((prev) => {
                  return { ...prev, orals: e.target.value };
                })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={()=>postData()}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
}

export default ScholasticArea;
