import React from "react";
import Table from 'react-bootstrap/Table';
import './Grading.css'
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
          <tr>
           <td>91-100</td>
           <td>A1</td>
           <td>Excellent</td>
          </tr>
          <tr>
           <td>81-90</td>
           <td>A2</td>
           <td>Very Good</td>
          </tr>
          <tr>
           <td>71-80</td>
           <td>B1</td>
           <td>Good</td>
          </tr>
          <tr>
           <td>61-70</td>
           <td>B2</td>
           <td>Satisfactory</td>
          </tr>
          <tr>
           <td>51-60</td>
           <td>C1</td>
           <td>Satisfactory</td>
          </tr>
          <tr>
           <td>40-50</td>
           <td>C2</td>
           <td>Satisfactory</td>
          </tr>
          <tr>
           <td>Below 40</td>
           <td>D</td>
           <td>Fail:Poor</td>
          </tr>

        </tbody>
      </Table>
      <p className=".mt-5 fst-italic">Our Parents are seen God on the earth</p>
    </div>
  );
}

export default Grading;
