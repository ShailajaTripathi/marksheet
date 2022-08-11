import React from "react";
import Table from "react-bootstrap/Table";
import TableTitle from "./TableTitle";
import "./styles/firstPart.css";
import '../../assets/css/table.css';
import fdata from '../JsonData/FirstPart.json';

function FirstPart() {
  
  return (
    <div className="tables">
    
      <TableTitle title="Part - I : Scholastic Areas"/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="tableHead" rowspan={2}>
              S.No
            </th>
            <th className="tableHead text-uppercase" rowspan={2}>
              Subjects
            </th>
            <th>FA</th>
            <th>Total</th>
            <th>SA</th>
            <th>Total</th>
            <th>Overall Marks</th>
          </tr>
          <tr>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">90</td>
            <td className="border-top fw-bold">100</td>
          </tr>
        </thead>
        {console.log("fdata",fdata)}
        <tbody className="tableBody">
          {fdata.map((e)=>(                
          <tr>
            <td>{e.id}</td>
            <td>{e.subject}</td>
            <td>{e.fa}</td>
            <td>{e.fmarks}</td>
            <td>{e.sa}</td>
            <td>{e.smarks}</td>
            <td className="text-center">70</td>
            </tr>
              ))}
               <tr>
          
               <td colSpan={2} className="fw-bold text-uppercase">
           Grand Total
            </td>
            <td colSpan={5} className="text-right">
              482
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="fw-bold text-uppercase">
              Percentage
            </td>
            <td colSpan={5} className="text-right ">
              80.8
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="fw-bold text-uppercase">
              Rank
            </td>
            <td colSpan={5} className="text-right">
              V
            </td>
          </tr>
            </tbody>
      </Table>
    </div>
  );
}

export default FirstPart;
