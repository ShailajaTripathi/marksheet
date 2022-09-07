import React, { useEffect, useState, Fragment, Form } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

import "./styles/secondPart.css";
import "../../../assets/css/table.css";
import Button from "react-bootstrap/Button";
import { Modal } from "antd";
// import data from "../../../db.json";
import ScholasticArea from "../../scoreinputform/attendendce/ScholasticArea";
import CoscholasticArea from "../../scoreinputform/attendendce/CoscholasticArea";
import { saveAs } from "file-saver";

function SecondPart() {
  const [data, setData] = useState({
    skill: "",
    grade: "",
    id: "",
  });
  const [status, setStatus] = useState(false);
  const [edit, setEdit] = useState(false);
  const [disable, setDisable] = useState(false);
  const handleOk = () => {
    setStatus(false);
  };

  const handleCancel = () => {
    setStatus(false);
  };

  const editData = (item) => {
    console.log("aaaa", item);
    setData({ skill: item.subject, grade: item.grade, id: item.id }); // setData(item);
    console.log(item);
    setEdit(true);
  };

  const showModal = () => {
    setStatus(true);
  };
  const [secondData, setSeconddata] = useState([]);
  const getSeconddata = async () => {
    const response = await axios("https://scorejson.herokuapp.com/secondpart");
    setSeconddata(response.data);
  };
  useEffect(() => {
    getSeconddata();
  }, []);
  const saveFile = () => {
    saveAs("https://scorejson.herokuapp.com/secondpart", "secondpart.json");
  };
  return (
    <div className="tables secondTable">
      <div className="d-flex justify-content-center">
        <div className="mr-5 p-1">
          <Button
            onClick={saveFile}
            variant="btn btn-outline-primary"
            className="ml-5 part-head"
          >
            Download json
          </Button>
        </div>
        <div className="p-1 flex-grow-1 ">
          <h3
            className="text-primary "
            onClick={() => {
              setStatus(true);
            }}
          >
            Part- II : CoScholastic Area
          </h3>
        </div>
      </div>

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
          </tr>
        </thead>
        <tbody className="tableBody tables">
          {secondData.map((item) => (
            <tr className="tableHeight">
              <td>{item.subject}</td>
              <td className="text-center">{item.grade}</td>
              <td>
                <div class="btn-group">
                  <Button
                    className="me-2 btn btn-primary"
                    onClick={() => {
                      showModal();
                      setDisable(true);
                      editData(item);
                    }}
                  >
                    {item.grade ? "Edit" : "Add"}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CoscholasticArea
        status={status}
        setStatus={setStatus}
        data={data}
        edit={edit}
        disable={disable}
        setDisable={setDisable}
        setEdit={setEdit}
      />
    </div>
  );
}

export default SecondPart;
