import React from "react";
import Academic from "../../components/scoreholdersheet/academic/Academic";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/table.css";
import Grading from "../../components/scoreholdersheet/grading/Grading";
import Button from "react-bootstrap/Button";
import scores from "../../db.json";

const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType });
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};
const onButtonClick = (e) => {
  e.preventDefault();
  downloadFile({
    data: JSON.stringify(scores),
    fileName: "Scoresheet.json",
    fileType: "text/json",
  });


};
function Sheet() {
  return (
    <div className="sheetContainer">
      <div className="position-absolute top-0 end-0">
        <Button onClick={onButtonClick}>Download Sheet</Button>
      </div>

      <h2 className="text-danger text-center border-bottom border-dark">
        First Terminal Examination 2018-2019
      </h2>
      <Academic />
      <Grading />
    </div>
  );
}

export default Sheet;
