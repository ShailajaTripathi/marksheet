import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableTitle from "./TableTitle";
import "./styles/secondPart.css";
import "../../../assets/css/table.css";
import Button from "react-bootstrap/Button";

function SecondPart() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  let [skill, setSkill] = useState("");
  let [grade, setGrade] = useState("");

  const editData = (item) => {
    //should set before
    setSkill(item.subject);
    setGrade(item.grade);
    // console.log(e);
    console.log("grade===>", grade)
    console.log("e.grade===>", item.grade)
    if (item.grade == grade) {
      //setIsModalVisible(true);
      console.log("success");
    } else {
      console.log("failed");
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [secondData, setSeconddata] = useState([]);
  const getSeconddata = async () => {
    const response = await axios("http://localhost:3000/secondpart");
    setSeconddata(response.data);
  };

  useEffect(() => {
    getSeconddata();
  }, []);

  return (
    <div className="tables secondTable">
      <TableTitle title="Part - II : Co-Scholastic Areas" onClick={showModal} />
      <Table
        striped
        bordered
        hover
        className="table-responsive border-bottom border-dark"
      >
        <thead>
          <tr>
            <th className="col-sm-7">Skills</th>
            <th className="col-sm-1">Grade</th>
            <th className="col-sm-1">Edit</th>
            <th className="col-sm-1">Delete</th>
          </tr>
        </thead>
        <tbody className="tableBody tables">
          {secondData.map((item) => (
            <tr className="tableHeight">
              <td>{item.subject}</td>

              <td className="text-center">{item.grade}</td>

              <td>
                <Button
                  className="me-2 btn btn-primary"
                  onClick={(e) => {
                   
                    
                    editData(item);
                    // setGrade(e.grade);
                    console.log("secondData===>", secondData)
                    // console.log("item===>", item)
                    // showModal();
                    // console.log("showModal===>", showModal)
                    // setIsModalVisible(true);
                  }}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  className="btn btn-danger"
                  // onClick={(e) => handleDelete()}
                >
                  Delete
                </Button>
              </td>
             
            </tr>
          ))}
        </tbody>
      </Table>
      {console.log(">>>>>>>>>>>>>", grade)}
    </div>
  );
}

export default SecondPart;
