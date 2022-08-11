import React from "react";
import Table from "react-bootstrap/Table";
import './styles/secondPart.css';
import '../../assets/css/table.css';

function SecondPart() {
  return (
    <div className="tables">
      <h3 className="text-primary tableTitle">
        {/* <span className="square border border-bottom-0"> */}
          Part - II : Co-Scholastic Areas
        {/* </span> */}
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody className="tableBody tables">
          <tr>
            <td>Development & Maturity</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Responsibility</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Self Confidence</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Participation in Group Work</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Neatness</td>
            <td className="text-center">A+</td>
          </tr>
          <tr>
            <td>Music</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Discipline</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Hand Work</td>
            <td className="text-center">B</td>
          </tr>
          <tr>
            <td>Attitude towards home work</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Craft</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Regularity and punctuality</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Arts</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Meditation</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Cultural Activities</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Library activities</td>
            <td className="text-center">A</td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
}

export default SecondPart;
