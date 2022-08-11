import React from 'react'
import Academic from '../../components/academic/Academic'
import 'bootstrap/dist/css/bootstrap.min.css';
import Grading from '../../components/grading/Grading';


function Sheet() {
  return (
    <div>
<h1 className='text-danger sheetTitle'>First Terminal Examination 2018-2019</h1>
<hr/>

<Academic/>
<Grading/>
    </div>
  )
}

export default Sheet