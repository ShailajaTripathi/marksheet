import React from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import "../../assets/css/academic.css";

function Academic() {
  return (
    <div className="topPart">
    <h2>Academic Performace</h2> 
<hr/>
<div class="d-flex align-items-baseline">
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
