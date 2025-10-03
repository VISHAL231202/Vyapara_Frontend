import { Col, Row } from "reactstrap";

const NestingCardBody = () => {
  return (
    <>
      <Col xs="3">
        <span className="bg-light">Level 1: .col-3</span>
      </Col>
      <Col xs="9">
        <div className="pb-0 bg-light p-2">
          <Row className="g-2">
            <Col xs="5">
              <span className="default-border border-1">Level 2: .col-5</span>
            </Col>
            <Col xs="7">
              <span className="default-border border-1">Level 2: .col-7</span>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs="8">
        <div className="pb-0 bg-light p-2">
          <Row className="g-2">
            <Col sm="2" xs="4">
              <span className="default-border border-1">Level 1: .col-2</span>
            </Col>
            <Col sm="10" xs="8">
              <span className="default-border border-1">Level 1: .col-10</span>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs="4">
        <span className="bg-light">Level 2: .col-4 </span>
      </Col>
    </>
  );
};

export default NestingCardBody;
