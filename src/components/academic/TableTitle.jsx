import React from "react";
import '../../assets/css/table.css';

function TableTitle(props) {
  return (
    <div>
      <h3 className="text-primary">{props.title}</h3>
    </div>
  );
}

export default TableTitle;
