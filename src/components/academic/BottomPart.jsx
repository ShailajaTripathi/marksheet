import React from "react";
import "./styles/bottom.css";


function BottomPart() {
  return (
    <div className="d-flex justify-content-between bg-light bottomPart">
      <div>
        <p className="fw-bold">C.G.P. : 9.8</p>
        <p>Teacher's Remarks - Excellent</p>
        <p className="mt-3 fst-italic teacherSign">Teacher's Signature</p>
      </div>
      <div>
        <p className="mt-5 fst-italic parentSign">Parent's Signature</p>
      </div>
      <div>
        <p className="fw-bold">Grade: A 1</p>
        <p className="mt-5 fst-italic principalSign">Principal Signature</p>
      </div>
    </div>
  );
}
export default BottomPart;
