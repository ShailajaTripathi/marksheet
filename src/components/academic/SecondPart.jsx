import React from "react";
import Table from "react-bootstrap/Table";
import TableTitle from "./TableTitle";
import './styles/secondPart.css';
import '../../assets/css/table.css';
import sdata from '../JsonData/SecondPart.json';

function SecondPart() {
  return (
    <div className="tables secondTable">
   <TableTitle title= "Part - II : Co-Scholastic Areas"/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody className="tableBody tables">
        {sdata.map((e)=>( 
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
