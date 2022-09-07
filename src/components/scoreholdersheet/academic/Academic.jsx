import React from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import "./styles/academic.css";
import "../../../assets/css/table.css";
import BottomPart from "./BottomPart";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Academic() {
  return (
    <div className="topPart">
      <h2 className="text-uppercase title border-bottom border-dark">
        Academic Performace
      </h2>

      <Container fluid="md">
        <Row>
          <Col
            sm={7}
            className="first_column table-responsive border border-dark"
          >
            <FirstPart />
          </Col>
          <Col
            sm={5}
            className="second_column table-responsive border border-dark"
          >
            <SecondPart />
          </Col>
        </Row>
        <Row>
          <ThirdPart/>
        </Row>
        <div>
          <BottomPart/>
        </div>
      </Container>
    </div>
  );
}

export default Academic;
