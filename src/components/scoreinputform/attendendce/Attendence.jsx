import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Attendence() {
  return (
    <div>
        <h3>Part-III: Attendence</h3>
      <Row>
        <Col>
          <FloatingLabel controlId="fa" label="Term-I">
            <Form.Control type="text" placeholder="Term-I" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="wd" label="No. of Working Days">
            <Form.Control type="number" placeholder="Out of 40" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="pd" label="No. of Present Days">
            <Form.Control type="number" placeholder="present days" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="percentage" label="Percentage">
            <Form.Control type="text" placeholder="percentage" />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
}

export default Attendence;
