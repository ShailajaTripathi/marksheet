import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../../../assets/css/table.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import Attendence from "../../scoreinputform/attendendce/Attendence";
import Button from "react-bootstrap/Button";
import { saveAs } from "file-saver";

function ThirdPart() {
  const [data, setData] = useState({
    workingDays:0,
    presentDays: 0,
    percentage: 0,
    id: "",
  });
  const [status, setStatus] = useState(false);
  const [edit, setEdit] = useState(false);
  const [disable, setDisable] = useState(false);
  const [percentagess, setPercentage] = useState(0);

  const showModal = () => {
    setStatus(true);
  };

  const handleOk = () => {
    setStatus(false);
  };

  const handleCancel = () => {
    setStatus(false);
  };

  const editData = (item) => {
    console.log("aaaa", item);
    setData({
      workingDays: item.workingDays,
      presentDays: item.presentDays,
      percentage: item.percentage,
      id: item.id,
    });
    console.log(item);
    setEdit(true);
  };
  const [thirdData, setThirddata] = useState([]);
  const getThirddata = async () => {
    const response = await axios("https://scorejson.herokuapp.com/thirdpart");
    setThirddata(response.data);

    for (let i = 0; i <= response.data.length; i++) {
      var percent = Math.round(
        ((response.data[i].workingDays) / (response.data[i].presentDays)) * 100
      );
      setPercentage(percent);
      console.log("percent",typeof percent);
    }
  };
  useEffect(() => {
    getThirddata();
  }, []);
  const saveFile = () => {
    saveAs("https://scorejson.herokuapp.com/thirdpart", "thirdpart.json");
  };
  return (
    <div className="tables">
      <div className="d-flex justify-content-center mt-4">
        <div className="mr-5 p-1">
          <Button
            onClick={saveFile}
            variant="btn btn-outline-primary"
            className="ml-5"
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
            Part - III : Attendence
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
            <th> </th>
            <th>No. of working days</th>
            <th>No. of Days Present</th>
            <th>Percentage</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {thirdData.map((e) => (
            <tr>
              <td className="text-uppercase"> {e.term}</td>
              <td>{e.workingDays}</td>
              <td>{e.presentDays}</td>
              <td>{percentagess}</td>
              <td>
                <Button
                  className="me-2"
                  variant="btn btn-outline-primary"
                  onClick={() => {
                    showModal();
                    setDisable(true);
                    editData(e);
                  }}
                >
                  {e.workingDays ? "Edit" : "Add"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Attendence
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
export default ThirdPart;
