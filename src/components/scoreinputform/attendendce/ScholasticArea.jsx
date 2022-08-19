import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Space, Select } from "antd";
const { Option } = Select;

function ScholasticArea() {
  const [form] = Form.useForm();
  return (
    <div>
      <h3> Part-I: Scholastic Areas</h3>
      <Space>
        <Form
          form={form}
          initialValues={{
            layout: "horizontal",
          }}
        >
          <Form.Item
            name="skill"
            label="Skill"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select a Subject" allowClear>
              <Option value="English">English</Option>
              <Option value="Hindi">Hindi</Option>
              <Option value="Sanskrit">Sanskrit</Option>
              <Option value="Math">Math</Option>
              <Option value="EVS">EVS</Option>
              <Option value="Social Study">Social Study</Option>
              <Option value="Computer">Computer</Option>
              <Option value="Moral">Moral</Option>
              <Option value="G.K.">G.K.</Option>
              <Option value="Conversation">Conversation</Option>
              <Option value="Drawing">Drawing</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="fa"
            label="FA"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Out of 40" />
          </Form.Item>
          <Form.Item
            name="oral"
            label="Oral"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Out of 10" />
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
            <Input placeholder="Out of 40" />
          </Form.Item>
          <Form.Item
            name="oral"
            label="Oral"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Out of 10" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Add</Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
}

export default ScholasticArea;
