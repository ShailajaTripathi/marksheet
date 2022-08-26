import "./App.css";
import "antd/dist/antd.min.css";
import { Sheet } from "./pages/scoresheet/Sheet";
import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";


function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  //  pdf code //
  const generatePDF = () => {
    const source = document.getElementById("sheet");
    const fileName = "scoresheet.pdf";
    html2pdf()
      .set({ html2canvas: { scale: 4 } })
      .from(source)
      .save(fileName);
  };
  return (
    <div className="App">
      <Sheet ref={componentRef} />
      <div className="save_download_btn_div">
        <ReactToPrint
          trigger={() => <Button>Print</Button>}
          content={() => componentRef.current}
        />

        <Button onClick={generatePDF}>Download</Button>
      </div>
    </div>
  );
}

export default App;
