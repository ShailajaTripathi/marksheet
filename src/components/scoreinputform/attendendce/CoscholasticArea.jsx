import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function CoscholasticArea() {
  return (
    <div>
      {" "}
      <h3> Part- II Co- Scholastic Areas</h3>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingSelect" label="Select Area">
            <Form.Select aria-label="Floating label select example">
              <option value="1">Development & Maturity</option>
              <option value="2">Responsibility</option>
              <option value="3">Self Confidence</option>
              <option value="4">Participation in Group Work</option>
              <option value="5">Neatness</option>
              <option value="6">Music</option>
              <option value="7">Discipline</option>
              <option value="8">Hand Work</option>
              <option value="9">Attitude towards home work</option>
              <option value="10">Craft</option>
              <option value="11">Regularity and punctuality</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="grade" label="Grade">
            <Form.Control type="text" placeholder="Out of 40" />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
}

export default CoscholasticArea;
