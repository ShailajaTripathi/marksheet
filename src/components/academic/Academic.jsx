import React from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import "./styles/academic.css";
import "../../assets/css/table.css";
import BottomPart from "./BottomPart";

function Academic() {
  return (
    <div className="topPart">
      <h2 className="text-uppercase title">Academic Performace</h2>
      <hr />

      {/* <div className="d-flex"> */}
      <div className="row">
        <div className="table-responsive col-md-6">
          <FirstPart />
        </div>
        <div className="table-responsive col-md-6">
          <SecondPart />
        </div>
      </div>
     
    <ThirdPart />
    <div> <BottomPart /></div>
    
     
    </div>
  );
}

export default Academic;
