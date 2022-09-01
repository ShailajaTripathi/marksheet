import React from 'react'

function Editablerow({ editFormData,
    handleEditFormChange,
    handleCancelClick}) {
  return (
    <div>Editablerow
          <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a skill..."
          name="subject"
          value={editFormData.subject}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an grade..."
          name="grade"
          value={editFormData.grade}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
    </div>
  )
}

export default Editablerow