import { Col, Container, Row } from "reactstrap";
import { P, SVG } from "../../AbstractElements";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="6" className="footer-copyright">
            <P className="mb-0">
              Copyright 2024 © Edmin Template by pixelstrap.
            </P>
          </Col>
          <Col md="6">
            <P className="mb-0 float-end">
              Hand crafted &amp; made with 
              <SVG iconId='footer-heart' className="svg-color footer-icon ms-1" />
            </P>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
