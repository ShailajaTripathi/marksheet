import React from "react";
import "../../../assets/css/table.css";

function TableTitle(props) {
  const onHeaderClick = () => {
   return (
    alert("radhe radhe")
   )
  };
  return (
    <div>
      <h3 className="text-primary" onClick={onHeaderClick}>{props.title}</h3>
      {/* <Attendence/> */}
    </div>
  );
}

export default TableTitle;
