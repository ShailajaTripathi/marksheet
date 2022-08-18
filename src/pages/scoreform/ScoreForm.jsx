import React from 'react';

import Attendence from '../../components/scoreinputform/attendendce/Attendence'
import ScholasticArea from '../../components/scoreinputform/attendendce/ScholasticArea'
import CosholasticArea from '../../components/scoreinputform/attendendce/CoscholasticArea'
function ScoreForm() {
  return (
    <div> Please fill marks by selecting each subject 
      <ScholasticArea/>
      <hr/>
      <CosholasticArea/>
      <hr/>
      <Attendence/>
    </div>
  )
}

export default ScoreForm