import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../../../assets/css/table.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import Attendence from "../../scoreinputform/attendendce/Attendence";

function ThirdPart() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [thirdData, setThirddata] = useState([]);
  const getThirddata = async () => {
    const response = await axios("http://localhost:3000/thirdpart");
    setThirddata(response.data);
  };
  useEffect(() => {
    getThirddata();
  }, []);

  return (
    <div className="tables">
      <h3 onClick={showModal}>Part - III : Attendence </h3>
      <Modal
        title="Part - III : Attendence"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Attendence />
      </Modal>
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
          </tr>
        </thead>
        <tbody>
          {thirdData.map((e) => (
            <tr>
              <td className="text-uppercase"> {e.term}</td>
              <td>{e.workingDays}</td>
              <td>{e.presentDays}</td>
              <td>{e.percentage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default ThirdPart;