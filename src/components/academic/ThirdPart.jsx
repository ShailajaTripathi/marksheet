import React from "react";
import Table from "react-bootstrap/Table";
import "../../assets/css/table.css";
import tdata from "../JsonData/ThirdPart.json";
function ThirdPart() {
  return (
    <div className="tables">
      <h3>Part - III : Attendence </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> </th>
            <th>No. of working days</th>
            <th>No. of Days Present</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {tdata.map((e) => (
            <tr>
              <td className="text-uppercase">{e.subject}</td>
              <td>{e.fnum}</td>
              <td>{e.snum}</td>
              <td>{e.tnum}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ThirdPart;
