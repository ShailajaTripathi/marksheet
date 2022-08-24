import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import data from "../../../db.json";
import axios from "axios";
import { Button, Form, Input, Space, Select, InputNumber } from "antd";
const { Option } = Select;




// const initialValues = {
//   subject: "",
//   fa: "",
//   oral: "",
//   sa: "",
//  oral: ""
// };

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
        subject: db.filter((item) => item.id === state.id)[0].subject,
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
<<<<<<< HEAD
      form.resetFields();
      res();
=======
      form.resetFields()
      res(); // so that api calls again with 

>>>>>>> 1aa7963f64475ce4757c313e99cce70fd605a0af
    }
  };

  useEffect(() => {
<<<<<<< HEAD
=======
    //api call which saves data inside state
>>>>>>> 1aa7963f64475ce4757c313e99cce70fd605a0af
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
                db.map( // check state is null or not
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
                max: 3,
                message: "Value should be less than 40",
              },
            ]}
          >
            <InputNumber
              placeholder="Out of 40"
              value={state.fa}
              min={1}
              max={40}
              onChange={(e) =>
                setState((prev) => {
                  return { ...prev, fa: e };
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
                max: 10,
                message: "Value should be less than 10",
              },
            ]}
          >
            <InputNumber
              placeholder="Out of 10"
              value={state.oralf}
              onChange={(e) =>
                setState((prev) => {
                  return { ...prev, oralf: e };
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
            <InputNumber
              placeholder="Out of 40"
              value={state.sa}
              onChange={(e) =>
                setState((prev) => {
                  return { ...prev, sa: e };
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
            <InputNumber
              placeholder="Out of 10"
              value={state.orals}
              onChange={(e) =>
                setState((prev) => {
<<<<<<< HEAD
                  return { ...prev, orals: e};
=======
                  return { ...prev, orals: e };
>>>>>>> 1aa7963f64475ce4757c313e99cce70fd605a0af
                })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={() => postData()}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
}

export default ScholasticArea;
