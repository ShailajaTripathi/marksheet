import React from "react";
import Academic from "../../components/scoreholdersheet/academic/Academic";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/table.css";
import Grading from "../../components/scoreholdersheet/grading/Grading";

function Sheet() {
  return (
    <div className="sheetContainer">
      <h2 className="text-danger border-bottom border-dark">
        First Terminal Examination 2018-2019
      </h2>
      <Academic />
      <Grading />
    </div>
  );
}

export default Sheet;
