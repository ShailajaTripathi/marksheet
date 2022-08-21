import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import Attendence from './Attendence';

function Forms() {
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
<Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
     <Attendence/>
      </Modal>
    </div>
  )
}

export default Forms