import React from 'react'
import Academic from '../../components/academic/Academic'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/table.css';
import Grading from '../../components/grading/Grading';



function Sheet() {
  return (
    <div>
<h1 className='text-danger border-bottom border-dark'>First Terminal Examination 2018-2019</h1>


<Academic/>
<Grading/>
    </div>
  )
}

export default Sheet