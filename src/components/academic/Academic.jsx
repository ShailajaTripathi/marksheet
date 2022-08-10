import React from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import "../../assets/css/academic.css";
import BottomPart from "./BottomPart";

function Academic() {
  return (
    <div className="topPart">
      <h2 className="text-uppercase">Academic Performace</h2>
      <hr />
      
      <div className="d-flex align-items-baseline">
        <FirstPart />
        <SecondPart />
      </div>
      <ThirdPart />

<BottomPart/>
    </div>
  );
}

export default Academic;
