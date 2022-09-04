import React, { useEffect, useState, Fragment, Form } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableTitle from "./TableTitle";
import "./styles/secondPart.css";
import "../../../assets/css/table.css";
import Button from "react-bootstrap/Button";
import { Modal } from "antd";
import data from "../../../db.json";
import ScholasticArea from "../../scoreinputform/attendendce/ScholasticArea";
import ReadOnlyRow from "./Readonlyrow";
import Editablerow from "./Editablerow";
import CoscholasticArea from "../../scoreinputform/attendendce/CoscholasticArea";

function SecondPart() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleOk = () => {
    setStatus(false);
  };

  const handleCancel = () => {
    setStatus(false);
  };

  const editData = (item) => {
    setData(item);
    console.log(item);
    setEdit(true);
  };
  //
  // const [contacts, setContacts] = useState(data);

  // const [addFormData, setAddFormData] = useState({
  //   subject: "",
  //   grade: "",
  // });

  // const [editFormData, setEditFormData] = useState({
  //   subject: "",
  //   grade: "",
  // });

  // const [editContactId, setEditContactId] = useState(null);

  const showModal = () => {
    setStatus(true);
  };

  const [secondData, setSeconddata] = useState([]);

  const getSeconddata = async () => {
    const response = await axios("http://localhost:3000/secondpart");
    setSeconddata(response.data);
  };
  useEffect(() => {
    getSeconddata();
  }, []);

  //

  // const handleEditFormSubmit = (event) => {
  //   event.preventDefault();

  //   const editedContact = {
  //     id: editContactId,
  //     subject: editFormData.subject,
  //     grade: editFormData.grade,
  //   };

  //   const newContacts = [...contacts];

  //   const index = contacts.findIndex((contact) => contact.id === editContactId);

  //   newContacts[index] = editedContact;

  //   setContacts(newContacts);
  //   setEditContactId(null);
  // };

  // const handleEditFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;
  //   const newFormData = { ...editFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setEditFormData(newFormData);
  // };
  // const handleCancelClick = () => {
  //   setEditContactId(null);
  // };

  // const handleEditClick = (event, contact) => {
  //   event.preventDefault();
  //   setEditContactId(contact.id);

  //   const formValues = {
  //     subject: contact.subject,
  //     grade: contact.grade,
  //   };
  //   setEditFormData(formValues);
  // };

  // const handleDeleteClick = (contactId) => {
  //   const newContacts = [...contacts];

  //   const index = contacts.findIndex((contact) => contact.id === contactId);

  //   newContacts.splice(index, 1);

  //   setContacts(newContacts);
  // };

  return (
    <div className="tables secondTable">
      {/* <TableTitle title="Part - II : Co-Scholastic Areas" onClick={showModal} status={true} /> */}
      {/* <Form onSubmit={handleEditFormSubmit}> */}
      <h1 onClick={showModal}>CoScholastic Area</h1>

      <Table
        striped
        bordered
        hover
        className="table-responsive border-bottom border-dark"
      >
        <thead>
          <tr>
            <th className="col-sm-7">Skills</th>
            <th className="col-sm-1">Grade</th>
            <th className="col-sm-1">Actions</th>
          </tr>
        </thead>
        <tbody className="tableBody tables">
          {secondData.map((item) => (
            <tr className="tableHeight">
              <td>{item.subject}</td>

              <td className="text-center">{item.grade}</td>

              <td>
                <div class="btn-group">
                  <Button
                    className="me-2 btn btn-primary"
                    onClick={() => {
                      // setSkill(item.subject);
                      showModal();
                      // console.log("Status", status);
                      editData(item);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </td>
            </tr>
          ))}
          {/* 
            {secondData.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <Editablerow
                    // editFormData={editFormData}
                    // handleEditFormChange={handleEditFormChange}
                    // handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    // contact={contact}
                    // handleEditClick={handleEditClick}
                    // handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))} */}
        </tbody>
      </Table>
      {/* </Form> */}
      <CoscholasticArea status={status} setStatus={setStatus} data={data} edit={edit} />
    </div>
  );
}

export default SecondPart;
