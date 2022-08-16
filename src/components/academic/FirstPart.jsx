import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableTitle from "./TableTitle";
import "./styles/firstPart.css";
import "../../assets/css/table.css";


function FirstPart() {
  const [firstData, setFirstdata] = useState([]);
  const [result, setResult] = useState([]);

  const getFirstdata = async () => {
    const response = await axios("http://localhost:3000/firstpart");
    setFirstdata(response.data);
  };
  const getResult = async () => {
    const response = await axios("http://localhost:3000/result");
    setResult(response.data);
  };

  useEffect(() => {
    getFirstdata();
    getResult();
  }, []);

  return (
    <div className="tables firstPart">
      <TableTitle title="Part - I : Scholastic Areas" />
      <Table
        striped
        bordered
        hover
        size="lg"
        className="table-responsive border border-dark"
      >
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
            <td className="border-top border-dark">70</td>
            <td className="border-top border-dark">70</td>
            <td className="border-top border-dark">70</td>
            <td className="border-top border-dark">90</td>
            <td className="border-top border-dark">100</td>
          </tr>
        </thead>

        <tbody className="tableBody">
          {firstData.map((e) => (
            <tr>
              <td className="text-center">{e.id}</td>
              <td>{e.subject}</td>
              <td className="text-center">{e.fa}</td>
              <td className="text-center">{e.fmarks}</td>
              <td className="text-center">{e.sa}</td>
              <td className="text-center">{e.smarks}</td>
              <td className="text-center">70</td>
            </tr>
          ))}
          {result.map((e) => (
            <tr>
              <td colSpan={2} className="fw-bold text-uppercase">
                {e.label}
              </td>
              <td colSpan={5} className="text-right">
                {e.value}
              </td>
            </tr>
          ))}
          {/* <tr> */}
          {/* <td colSpan={2} className="fw-bold text-uppercase">
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
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}

export default FirstPart;
