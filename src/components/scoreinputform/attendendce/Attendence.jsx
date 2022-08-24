// import "antd/dist/antd.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Form, InputNumber,Space,Input,Select} from "antd";
// import {
//   ContainerOutlined,
//   ContactsOutlined,
//   LineChartOutlined,
// } from "@ant-design/icons";
// import { Row, Col } from "antd";
// import { useFormik } from "formik";
// import * as yup from 'yup';
// const { Option } = Select;




// const initialValues = {
// term: "",
// workingDays: "",
// presentDays: "",
// percentage:"",
// };

// let attendenceSchema= yup.object({
// 	term: yup.string().required("fill it name"),
// 	workingDays: yup.number().required("fill it email"),
// 	presentDays: yup.number().required("fill it phone"),
//   percentage: yup.number().required("Enter Percentage")
//   });


// function Attendence() {
//   const [form] = Form.useForm(); 
//   const [percentage, setPercentage] = useState("45");
//   const [db, setDb] = useState(null);
//  const [term,setTerm]=useState({
//   id: null,
//         term: null,
//         workingDays:null,
//         presentDays:null,
//         percentage:null 

//  });

//  const postData = async () => {
  
//   const response = await axios.post(
//     `http://localhost:3000/thirdpart`,
//     {
      
//       term: term.term,
//       workingDays:term.workingDays,
//       presentDays:term.presentDays,
//       percentage:term.percentage
//     }
//   );
//     if (response.status === 200) {
//       setTerm(null);
//           form.resetFields()
//           res();
//     }
//  }
//  const res = async () => {
//   let resp = await axios.get("http://localhost:3000/thirdpart");
//   setDb(resp.data);
// };
//  useEffect(() => {
//   res();
// }, []);
//  const handleClick = e => {
//   postData()
//  }
//  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
  
//   initialValues: initialValues,
//  validationSchema:attendenceSchema,
//     onSubmit: (values,action) => {
//       console.log(values);
// action.resetForm();
//     },
//   });


//   return (
//     <div>
//       {/* <h3>Part-III : Attendence</h3> */}
//       <Space>
//       <Row>
//         <Form name="horizontal_login" onSubmit={handleSubmit}>
//           <Col>
//           <Form.Item
//             name="term"
//             label="Term"
//                     value={values.term}
//                      onChange={handleChange}
//                      onBlur={handleBlur}
//             rules={[
//               {
//                 required: true,
//               },
//             ]}
//           >
//             <Select
//               placeholder="Select a Term"
//               allowClear
//               value={term.id}
     
//               onSelect={(e) =>
//                 setTerm((prev) => {
//                   return { ...prev, id: e };
//                 })
//               }
      
//             >
//               {db &&
//                 db.map(
//                   (item) =>
//                     !item.workingDays && (
//                       <Option key={Math.random()} value={item.id}>
//                         {item.term}
//                       </Option>
//                     )
//                 )}
//             </Select>
//             {errors.term && touched.term ?(<p>{errors.term}</p>):null}
//           </Form.Item>
//             <Form.Item
//               name="workingDays"
//               label="No. of Working Days"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please set No. of working days",
//                 },
//               ]}
//             >
//               <InputNumber
//                 prefix={<ContactsOutlined className="site-form-item-icon" />}
//                 placeholder="Days"
//                 onChange={(e) =>
//                   setTerm((prev) => {
//                     return { ...prev, workingDays: e };
//                   })
//                 }
//               />
//             </Form.Item>
          

//             <Form.Item
//               name="presentDays"
//               label="No. of Present Days"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please give No. of Present Days",
//                 },
//               ]}
//             >
//               <InputNumber
//                 min={1}
//                 max={300}
//                 placeholder="Days"
//                 prefix={<ContainerOutlined className="site-form-item-icon" />}
//                 onChange={(e) =>
//                   setTerm((prev) => {
//                     return { ...prev, presentDays: e };
//                   })
//                 }
//                 //  value={percentage}
//                 //  onChange={setPercentage}
//               />
//             </Form.Item>
//           </Col>
//           {/* -------------------percentage--------------- */}
//           <Col>
//             <Form.Item
//               name="percentage"
//               label="Percentage"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please give percentage",
//                 },
//               ]}
//             >
//               <InputNumber
//                 min={40}
//                 max={100}
//                 formatter={(value) => `${value}%`}
//                 parser={(value) => value.replace("%", "")}
//                 prefix={<LineChartOutlined className="site-form-item-icon" />}
//                 value={percentage}
//                 // onChange={setPercentage}
//                 onChange={(e) =>
//                   setTerm((prev) => {
//                     return { ...prev, percentage: e };
//                   })
//                 }
//               />
//             </Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               onClick={handleClick}
             
//             >
//               Add
//             </Button>
//           </Col>
//         </Form>
//       </Row>
//       </Space>
//     </div>
//   );
// }

// export default Attendence;
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "antd/dist/antd.css";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";


const initialValues = {
  term: "",
  workingDays: "",
  presentDays: "",
  percentage: "",
};
let attendenceSchema = yup.object({
  term: yup.string().required("Select Term"),
  workingDays: yup.number().required("Set Working Days"),
  presentDays: yup.number().required("Set Present Days"),
  percentage: yup.number().required("Enter Percentage"),
});

function Attendence() {
  const [db, setDb] = useState(null);
  const [term, setTerm] = useState({
    id: null,
    term: null,
    workingDays: null,
    presentDays: null,
    percentage: null,
  });

  const postData = async () => {
    const response = await axios.post(`http://localhost:3000/thirdpart`, {
      term: term.term,
      workingDays: term.workingDays,
      presentDays: term.presentDays,
      percentage: term.percentage,
    });
    if (response.status === 200) {
      setTerm(null);
      res();
    }
  };
  const res = async () => {
    let resp = await axios.get("http://localhost:3000/thirdpart");
    setDb(resp.data);
  };
  useEffect(() => {
    res();
  }, []);
  const handleClick = (e) => {
    postData();
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: attendenceSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
     <Form onSubmit={handleSubmit} className="ml-5 mt-5">
        <Form.Group as={Row} className="mb-3" controlId="formGridState">
          <Form.Label column sm={2}>
            Term
          </Form.Label>
          <Col sm={3}>
            <Form.Select
              defaultValue="Choose..."
              name="term"
              value={values.term}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled>Choose Term..</option>
              <option>Term-I</option>
              <option>Term-II</option>
            </Form.Select>
            {errors.workingDays && touched.workingDays ? (
              <p className="text-danger">{errors.term}</p>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="number">
          <Form.Label column sm={2}>
            Working Days
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="number"
              placeholder="Set working Days"
              name="workingDays"
              value={values.workingDays}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.workingDays && touched.workingDays ? (
              <p className="text-danger">{errors.workingDays}</p>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="number">
          <Form.Label column sm={2}>
            Present Days
          </Form.Label>
          <Col sm={3}>
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

        <Form.Group as={Row} className="mb-3" controlId="number">
          <Form.Label column sm={2} >
            Percentage
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="number"
              placeholder="Enter Percentage"
              name="percentage"
              value={values.percentage}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.percentage && touched.percentage ? (
              <p className="text-danger">{errors.percentage}</p>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 5, offset: 0 }}>
            <Button type="submit" onClick={handleClick} className= "px-4" variant="btn btn-outline-primary">Add</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Attendence