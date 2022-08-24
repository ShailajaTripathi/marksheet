import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, InputNumber,Space,Input,Select} from "antd";

import {
  ContainerOutlined,
  ContactsOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
const { Option } = Select;

function Attendence() {
  const [form] = Form.useForm(); 
  const [percentage, setPercentage] = useState("45");
 const [term,setTerm]=useState({
  id: null,
        term: null,
        workingDays:null,
        presentDays:null,
        percentage:null 

 });

 const postData = async () => {
  
  const response = await axios.post(
    `http://localhost:3000/thirdpart`,
    {
      
      term: term.term,
      workingDays:term.workingDays,
      presentDays:term.presentDays,
      percentage:term.percentage
    }
  );
    if (response.status === 200) {
      setTerm(null);
          form.resetFields()
          
    }
 }

 const handleClick = e => {
  postData()
 }



  return (
    <div>
      {/* <h3>Part-III : Attendence</h3> */}
      <Space>
      {/* <Row> */}
        <Form form={form} name="horizontal_login">
          {/* <Col> */}
          <Form.Item
              name="Term"
              label="Term"
               // onSelect={(e) =>
              //   setState((prev) => {
              //     return { ...prev, id: e };
              //   })
              // }
            >      
            <Select
              placeholder="Select a Term"
              allowClear
              // value={state.id}
              // onSelect={(e) =>
              //   setState((prev) => {
              //     return { ...prev, id: e };
              //   })
              // }
            >
              <Option>Term-I</Option>
              <Option>Term-II</Option>
            </Select>
            </Form.Item> 
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
                onChange={(e) =>
                  setTerm((prev) => {
                    return { ...prev, workingDays: e };
                  })
                }
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
                onChange={(e) =>
                  setTerm((prev) => {
                    return { ...prev, presentDays: e };
                  })
                }
              
              />
            </Form.Item>
      
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
                // onChange={setPercentage}
                onChange={(e) =>
                  setTerm((prev) => {
                    return { ...prev, percentage: e };
                  })
                }
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleClick}
             
            >
              Add
            </Button>
          {/* </Col> */}
        </Form>
      {/* </Row> */}
      </Space> 
    </div>
  );
}

export default Attendence;
