import React from "react";
import "antd/dist/antd.css";
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

  const onSkillChange = (value) => {
    switch (value) {
      case "Development & Maturity":
        form.setFieldsValue({
          note: "A+",
        });
        return;

      case "Responsibility":
        form.setFieldsValue({
          note: "Set Grade",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Set a grade",
        });
    }
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
      <h3> Part-II : Co- Scholastic Areas</h3>
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
              onChange={onSkillChange}
              allowClear
            >
              <Option value="Development & Maturity">
                Development & Maturity
              </Option>
              <Option value="Responsibility">Responsibility</Option>
              <Option value="Self Confidence">Self Confidence</Option>
              <Option value="Participation in Group Work">
                Participation in Group Work
              </Option>
              <Option value="Neatness">Neatness</Option>
              <Option value="Music">Music</Option>
              <Option value="Discipline">Discipline</Option>
              <Option value="Hand Work">Hand Work</Option>
              <Option value="Attitude towards home work">
                Attitude towards home work
              </Option>
              <Option value="Craft">Craft</Option>
              <Option value="Regularity and punctuality">
                Regularity and punctuality
              </Option>
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
            <Input />
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
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 12 }}
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
