import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, ProductOfferHeading, Weekly,Yearly} from "../../../../utils/Constant";
import ProductOfferBody from "./ProductOfferBody";

const ProductOffer = () => {
  return (
    <Col md="6" xl="3">
      <Card className="product-offer">
        <CardHeaderCommon title={ProductOfferHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody>
          <ProductOfferBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductOffer;
