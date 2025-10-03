import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, ProductOfferHeading, Weekly, Yearly } from "../../../../utils/Constant";
import ProductOfferBody from "../../../Dashboard/Ecommerce/ProductOffer/ProductOfferBody";

const ProductOffer = () => {
  return (
    <Col sm="6" xl="3">
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
