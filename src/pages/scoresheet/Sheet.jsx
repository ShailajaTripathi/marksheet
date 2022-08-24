import React from "react";
import Academic from "../../components/scoreholdersheet/academic/Academic";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/table.css";
import Grading from "../../components/scoreholdersheet/grading/Grading";

function Sheet() {
  return (
    <div className="sheetContainer">
<<<<<<< HEAD
      <h2 className="text-danger border-bottom border-dark">
        First Terminal Examination 2018-2019
      </h2>
=======
      <h1 className="text-danger border-bottom border-dark">
        First Terminal Examination 2018-2019
      </h1>
>>>>>>> 1aa7963f64475ce4757c313e99cce70fd605a0af
      <Academic />
      <Grading />
    </div>
  );
}

export default Sheet;
