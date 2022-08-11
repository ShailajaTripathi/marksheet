import React from "react";
import Table from "react-bootstrap/Table";
import './styles/secondPart.css';
import '../../assets/css/table.css';

function SecondPart() {
  return (
    <div>
      <h3 className="text-primary">
        <span className="square border border-bottom-0">
          Part - II : Co-Scholastic Areas
        </span>
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <td>Development & Maturity</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Responsibility</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Self Confidence</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Participation in Group Work</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Neatness</td>
            <td>A+</td>
          </tr>
          <tr>
            <td>Music</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Discipline</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Hand Work</td>
            <td>B</td>
          </tr>
          <tr>
            <td>Attitude towards home work</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Craft</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Regularity and punctuality</td>
            <td>A</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SecondPart;
