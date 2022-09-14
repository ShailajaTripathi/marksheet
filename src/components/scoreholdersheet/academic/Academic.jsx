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

function Academic(props) {
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
            <FirstPart showing={props.shown}/>
          </Col>
          <Col
            sm={5}
            className="second_column table-responsive border border-dark"
          >
            <SecondPart showing={props.shown} />
          </Col>
        </Row>
        <Row>
          <ThirdPart showing={props.shown} />
        </Row>
        <div>
          <BottomPart />
        </div>
      </Container>
    </div>
  );
}

export default Academic;
