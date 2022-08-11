import React from "react";
import Table from 'react-bootstrap/Table';
import './Grading.css';
import gdata from '../JsonData/GradingPart.json';
function Grading() {
  return (
    <div className="gradingTable">
      <h3 className="text-uppercase"> Grading Scale</h3>
      <Table striped bordered hover>
        <thead>
          <tr  className="text-uppercase">
            <th>Marks Range</th>
            <th>Grades</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
        {gdata.map((e)=>( 
          <tr>
           <td>{e.range}</td>
           <td>{e.grade}</td>
           <td>{e.remarks}</td>
          </tr>
        ))}

        </tbody>
      </Table>
      <p className=".mt-5 fst-italic">Our Parents are seen God on the earth</p>
    </div>
  );
}

export default Grading;
