import React from 'react'
import Table from 'react-bootstrap/Table';
function ThirdPart() {
  return (
    <div>
      <h3>Part - III : Attendence </h3>

 <Table striped bordered hover>
      <thead>
        <tr>
          <th> </th>
          <th>No. of working days</th>
          <th>No. of Days Present</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-uppercase'>Term-I</td>
          <td>83</td>
          <td>83</td>
          <td>100</td>
        </tr>
      </tbody>
    </Table> 

    </div>
  )
}

export default ThirdPart