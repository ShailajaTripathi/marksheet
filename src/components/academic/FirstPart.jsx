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
            <th>S.No</th>
            <th>Subjects</th>
            <th>
              FA
              <th>70</th>
            </th>
            <th>
              Total<th>70</th>
            </th>
            <th>
              SA<th>70</th>
            </th>
            <th>Total<th>100</th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default FirstPart;
