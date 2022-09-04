import React from "react";

function Readonlyrow({ contact, handleEditClick, handleDeleteClick }) {
  return (
    <div>
      <tr>
        <td>{contact.subject}</td>
        <td>{contact.grade}</td>
      
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event,contact)}
          >
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteClick(contact.id)}>
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
}

export default Readonlyrow;
