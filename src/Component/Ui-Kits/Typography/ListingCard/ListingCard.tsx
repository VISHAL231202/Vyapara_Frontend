import { Card, CardBody, Col, Row } from "reactstrap";
import { ListingTypography } from "../../../../utils/Constant";
import { listingData } from "../../../../Data/Ui-Kits/Typography/Typography";
import UnOrderLists from "./UnOrderLists";
import OrderList from "./OrderList";
import DescriptionList from "./DescriptionList";
import CardHeaderCommon from "../../CardHeaderCommon";

const ListingCard = () => {
  return (
    <Col xl="12">
      <Card className="listing">
        <CardHeaderCommon title={ListingTypography} span={listingData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <UnOrderLists />
            <OrderList />
            <DescriptionList />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListingCard;
