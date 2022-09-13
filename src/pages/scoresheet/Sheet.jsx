import React, { useState } from "react";
import Academic from "../../components/scoreholdersheet/academic/Academic";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/table.css";
import Grading from "../../components/scoreholdersheet/grading/Grading";
import Button from "react-bootstrap/Button";
import scores from "../../db.json";
import { saveAs } from "file-saver";
import axios from "axios";
import { useEffect } from "react";

// import scores from 'https://scorejson.herokuapp.com/'

// const downloadFile = ({ data, fileName, fileType }) => {
//   const blob = new Blob([data], { type: fileType });
//   const a = document.createElement("a");
//   a.download = fileName;
//   a.href = window.URL.createObjectURL(blob);
//   const clickEvt = new MouseEvent("click", {
//     view: window,
//     bubbles: true,
//     cancelable: true,
//   });
//   a.dispatchEvent(clickEvt);
//   a.remove();
// };
// const onButtonClick = (e) => {
//   e.preventDefault();
//   downloadFile({
// data: JSON.stringify(scores),
//     // data:`https://scorejson.herokuapp.com/`,
//     fileName: "Scoresheet.json",
//     fileType: "text/json",
//   });
// };

export const Sheet = React.forwardRef((props, ref) => {
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [thirdData, setThirdData] = useState(null);
  useEffect(() => {
    axios.get("https://scorejson.herokuapp.com/firstpart").then((res) => {
      setFirstData(res.data);
    });
    axios.get("https://scorejson.herokuapp.com/secondpart").then((res) => {
      setSecondData(res.data);
    });
    axios.get("https://scorejson.herokuapp.com/thirdpart").then((res) => {
      setThirdData(res.data);
    });
  }, []);
  const saveFile = () => {
    console.log("yyyy", firstData, secondData, thirdData);
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify([firstData, secondData, thirdData])
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "scorecard.json";

    link.click();
  };

  return (
    <div id="sheet" className="sheetContainer" ref={ref}>
      <div className="position-absolute top-0 end-0">
        <Button onClick={saveFile}>Download json</Button>
      </div>

      <h2 className="text-danger text-center border-bottom border-dark">
        First Terminal Examination 2018-2019
      </h2>
      <Academic />
      <Grading />
    </div>
  );
});
