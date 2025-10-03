import { Col, Row } from "reactstrap";
import HomeEstateCard from "./HomeEstateCard";

const HomeEstate = () => {
  return (
    <Col md="12" lg="6">
      <Row>
        <HomeEstateCard />
      </Row>
    </Col>
  );
};

export default HomeEstate;
