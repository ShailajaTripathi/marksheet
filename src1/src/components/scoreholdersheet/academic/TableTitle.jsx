import React, { useState, useEffect } from "react";
import "../../../assets/css/table.css";
import CoscholasticArea from "../../scoreinputform/attendendce/CoscholasticArea";
import { Modal } from "antd";
import ScholasticArea from "../../scoreinputform/attendendce/ScholasticArea";

function TableTitle(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <h3 className="text-primary" onClick={showModal}>
        {props.title}
      </h3>
      {props.title === "Part - I : Scholastic Areas" ? (
        <Modal
          title={props.title}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <ScholasticArea />
        </Modal>
      ) : (
        <Modal
          title={props.title}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <CoscholasticArea />
        </Modal>
      )}
    </div>
  );
}

export default TableTitle;
