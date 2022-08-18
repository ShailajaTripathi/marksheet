import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableTitle from "./TableTitle";
import './styles/secondPart.css';
import "../../../assets/css/table.css"


function SecondPart() {

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
   <TableTitle title= "Part - II : Co-Scholastic Areas"/>
      <Table striped bordered hover className="table-responsive border-bottom border-dark">
        <thead>
          <tr>
            <th className="col-sm-2"></th>
            <th className="col-sm-1">Grade</th>
          </tr>
        </thead>
        <tbody className="tableBody tables">
        {secondData.map((e) => (
          <tr className="tableHeight">
            <td>{e.subject}</td>
            <td className="text-center">{e.grade}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SecondPart;
