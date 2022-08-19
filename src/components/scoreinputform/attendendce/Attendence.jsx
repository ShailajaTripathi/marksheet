import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { Button, Form, InputNumber,Space } from "antd";
import {
  ContainerOutlined,
  ContactsOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";

function Attendence() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const [percentage, setPercentage] = useState("45");
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div>
      <h3>Part-III : Attendence</h3>
      <Space>
      <Row>
        <Form form={form} name="horizontal_login" onFinish={onFinish}>
          <Col>
            <Form.Item
              name="No. of Working days"
              label="No. of Working Days"
              rules={[
                {
                  required: true,
                  message: "Please set No. of working days",
                },
              ]}
            >
              <InputNumber
                prefix={<ContactsOutlined className="site-form-item-icon" />}
                placeholder="Days"
              />
            </Form.Item>
            <Form.Item
              name="No. of Present Days"
              label="No. of Present Days"
              rules={[
                {
                  required: true,
                  message: "Please give No. of Present Days",
                },
              ]}
            >
              <InputNumber
                min={1}
                max={300}
                placeholder="Days"
                prefix={<ContainerOutlined className="site-form-item-icon" />}
                //  value={percentage}
                //  onChange={setPercentage}
              />
            </Form.Item>
          </Col>
          {/* -------------------percentage--------------- */}
          <Col>
            <Form.Item
              name="percentage"
              label="Percentage"
              rules={[
                {
                  required: true,
                  message: "Please give percentage",
                },
              ]}
            >
              <InputNumber
                min={40}
                max={100}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace("%", "")}
                prefix={<LineChartOutlined className="site-form-item-icon" />}
                value={percentage}
                onChange={setPercentage}
              />
            </Form.Item>
            <Button
              type="primary"
              onClick={() => {
                setPercentage(40);
              }}
             
            >
              Reset
            </Button>
          </Col>
        </Form>
      </Row>
      </Space>
    </div>
  );
}

export default Attendence;
