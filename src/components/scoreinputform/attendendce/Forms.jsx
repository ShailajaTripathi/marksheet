import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Select } from "antd"

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

function Forms() { // To disable submit button at the beginning.
  const [form] = Form.useForm();

  const onSkillChange = (value) => {
    switch (value) {
      case 'Development & Maturity':
        form.setFieldsValue({
          note: 'A+',
        });
        return;

      case 'Responsibility':
        form.setFieldsValue({
          note: 'Set Grade',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Set a grade',
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
      skill: 'Development & Maturity',
      grade: 'A+',
    });
  };

  return (
    <div>
      <h3> Part-II : trial</h3>
  <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
            <option value="Development & Maturity">Development & Maturity</option>
                <option value="Responsibility">Responsibility</option>
                <option value="Self Confidence">Self Confidence</option>
                <option value="Participation in Group Work">Participation in Group Work</option>
                <option value="Neatness">Neatness</option>
                <option value="Music">Music</option>
                <option value="Discipline">Discipline</option>
                <option value="Hand Work">Hand Work</option>
                <option value="Attitude towards home work">Attitude towards home work</option>
                <option value="Craft">Craft</option>
                <option value="Regularity and punctuality">Regularity and punctuality</option>
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
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
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
        <Button type="primary" htmlType="submit">
        Add Grade
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}

export default Forms;
