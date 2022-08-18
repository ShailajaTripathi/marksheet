import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function ScholasticArea() {
  return (
    <div>
        <h3> Part- I Scholastic Areas</h3>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingSelect" label="Select Subject">
            <Form.Select aria-label="Floating label select example">
              <option value="1">English</option>
              <option value="2">Hindi</option>
              <option value="3">Sanskrit</option>
              <option value="4">Math</option>
              <option value="5">EVS</option>
              <option value="6">Social Study</option>
              <option value="7">Computer</option>
              <option value="8">Moral</option>
              <option value="9">G.K.</option>
              <option value="10">Conversation</option>
              <option value="11">Drawing</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="fa" label="FA / Out of 40">
            <Form.Control type="number" placeholder="Out of 40" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="faOral" label="Oral / Out of 10">
            <Form.Control type="number" placeholder="Out of 10" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="sa" label="SA / Out of 40">
            <Form.Control type="number" placeholder="Out of 40" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="saOral" label="Oral / Out of 10">
            <Form.Control type="number" placeholder="Out of 10" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="total" label="">
            <Form.Label>Overall Marks: </Form.Label>
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
}

export default ScholasticArea;
