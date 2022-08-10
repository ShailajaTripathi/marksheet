import React from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
// import styles from '../../assets/css'

function Academic() {
  return (
    <div>
    <h2>Academic Performace</h2> 
<hr/>
      <div className="topPart">
        <div>
          <FirstPart />
        </div>
        <div>
          <SecondPart />
        </div>
      </div>
      <ThirdPart />
    </div>
  );
}

export default Academic;
