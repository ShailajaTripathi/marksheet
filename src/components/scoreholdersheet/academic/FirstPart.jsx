import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

import "./styles/firstPart.css";
import "../../../assets/css/table.css";
import Button from "react-bootstrap/Button";
import { Modal } from "antd";
import ScholasticArea from "../../scoreinputform/attendendce/ScholasticArea";

function FirstPart() {
  const [data, setData] = useState({
    subject: "",
    fa: "",
    oralf: "",
    sa: "",
    orals: "",
    id: "",
  });
  const [firstData, setFirstdata] = useState([]);
  const [result, setResult] = useState([]);
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(false);
  const getFirstdata = async () => {
    const response = await axios("http://localhost:3000/firstpart");
    setFirstdata(response.data);
  };
  const getResult = async () => {
    const response = await axios("http://localhost:3000/result");
    setResult(response.data);
  };
  const showModal = () => {
    setStatus(true);
  };
  const editData = (item) => {
    console.log("aaaa", item);
    setData({
      subject: item.subject,
      fa: item.fa,
      oralf: item.oralf,
      sa: item.sa,
      orals: item.orals,
      id: item.id,
    });

    console.log(item);
    setEdit(true);
  };
  useEffect(() => {
    getFirstdata();
    getResult();
  }, []);

  return (
    <div className="tables firstPart">
      <h3
        className="text-primary"
        onClick={() => {
          setStatus(true);
        }}
      >
        Part - I : Scholastic Areas
      </h3>
      <Table
        striped
        bordered
        hover
        size="md"
        className="table-responsive border border-dark"
      >
        <thead>
          <tr>
            <th className="tableHead col-sm-1" rowspan={2}>
              S.No
            </th>
            <th className="tableHead text-uppercase col-sm-2" rowspan={2}>
              Subjects
            </th>
            <th className="col-sm-1">FA</th>
            <th className="col-sm-1">Oral</th>
            <th className="col-sm-1">SA</th>
            <th className="col-sm-1">Oral</th>
            <th className="col-sm-1">Overall Marks</th>
            <th className="col-sm-1" rowspan={2}>
              Edit
            </th>
          </tr>
          <tr>
            <td className="border-top border-dark fw-bold">40</td>
            <td className="border-top border-dark fw-bold">10</td>
            <td className="border-top border-dark fw-bold">40</td>
            <td className="border-top border-dark fw-bold">10</td>
            <td className="border-top border-dark fw-bold">100</td>
          </tr>
        </thead>

        <tbody className="tableBody">
          {firstData.map((e) => (
            <tr>
              <td className="text-center">{e.id}</td>
              <td>{e.subject}</td>
              <td className="text-center">{e.fa}</td>
              <td className="text-center">{e.oralf}</td>
              <td className="text-center">{e.sa}</td>
              <td className="text-center">{e.orals}</td>
              <td className="text-center">{e.total}</td>
              <td>
                <Button
                  className="me-2 btn btn-primary"
                  onClick={() => {
                    showModal();
                    editData(e);
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
          {result.map((e) => (
            <tr>
              <td colSpan={3} className="fw-bold text-uppercase">
                {e.label}
              </td>
              <td colSpan={6} className="align-items-end">
                {e.value}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ScholasticArea
        status={status}
        setStatus={setStatus}
        data={data}
        edit={edit}
      />
    </div>
  );
}

export default FirstPart;
