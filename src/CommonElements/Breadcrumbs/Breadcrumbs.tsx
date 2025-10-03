import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import SVG from "../SVG";
import { PropsTypes } from "../../Type/Layout/CommonElements/Breadcrumbs";
import H3 from "../Headings/H3Element";

const Breadcrumbs = ({ mainTitle, parent }: PropsTypes) => {
  return (
    <Container fluid>
      <Row className="page-title">
          <Col sm="6">
            <H3>{mainTitle}</H3>
          </Col>
          <Col sm="6">
            <Breadcrumb className="justify-content-sm-end align-items-center">
              <BreadcrumbItem>
                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                  <SVG iconId="Home" className="svg-color" />
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{parent}</BreadcrumbItem>
              <BreadcrumbItem className="active">{mainTitle}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
      </Row>
    </Container>
  );
};

export default Breadcrumbs;
