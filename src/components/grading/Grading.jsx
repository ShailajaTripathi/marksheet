import React from "react";
import Table from 'react-bootstrap/Table';
import './Grading.css';


function Grading() {
  return (
    <div className="gradingTable">
      <h3 className="text-uppercase"> Grading Scale</h3>
      <Table striped bordered hover className="table-responsive border-bottom border-dark">
        <thead>
          <tr  className="text-uppercase">
            <th>Marks Range</th>
            <th>Grades</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
        {/* {data.grading.map((e)=>(  */}
          <tr>
           {/* <td className="col-md-1">{e.range}</td>
           <td className="col-md-1">{e.grade}</td>
           <td className="col-sm-1">{e.remarks}</td> */}
          </tr>
        {/* ))} */}

        </tbody>
      </Table>
      <p className=".mt-5 fst-italic">Our Parents are seen God on the earth</p>
    </div>
  );
}

export default Grading;
