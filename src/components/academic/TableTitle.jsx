import React from "react";

function TableTitle(props) {
  return (
    <div>
      <h3 className="text-primary tableTitle">{props.title}</h3>
    </div>
  );
}

export default TableTitle;
