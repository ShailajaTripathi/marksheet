import React from "react";
import Table from "react-bootstrap/Table";
import "../../assets/css/secondPart.css";

function FirstPart() {
  return (
    <div>
      <h3 className="text-primary">
        <span className="square border border-bottom-0">
          Part - I : Scholastic Areas
        </span>
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="tableHead" rowspan={2}>
              S.No
            </th>
            <th className="tableHead" rowspan={2}>
              Subjects
            </th>
          <th>FA</th>
            <th>Total</th>
            <th>SA</th>
            <th>Total</th>
          </tr>
          <tr>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">100</td>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <td>01</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>03</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>05</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>06</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>07</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>08</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>09</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td colSpan={2} className="fw-bold">Grand Total</td>
            <td colSpan={5}>485</td>
          </tr>
          <tr>
            <td colSpan={2} className="fw-bold">Percentage</td>
            <td colSpan={5}>80.8</td>
          </tr>
          <tr>
            <td colSpan={2} className="fw-bold">Rank</td>
            <td colSpan={5}>V</td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
}

export default FirstPart;
