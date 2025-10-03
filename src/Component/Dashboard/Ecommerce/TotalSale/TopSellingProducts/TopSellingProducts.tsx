import { Card, CardBody, Col, Input, Table } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, TopSellingProductsHeading, Weekly, Yearly } from "../../../../../utils/Constant";
import TopSellingProductsTableBody from "./TopSellingProductsTableBody";

const TopSellingProducts = () => {
  return (
    <Col md="6" xl="7">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={TopSellingProductsHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="selling-table checkbox-checked">
            <Table responsive id="sell-product">
              <thead>
                <tr>
                  <th>
                    <Input className="form-check-input" type="checkbox" />
                  </th>
                  <th>Product Name</th>
                  <th>Order Id</th>
                  <th>Email</th>
                  <th>Stock</th>
                  <th>Amount </th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                <TopSellingProductsTableBody />
              </tbody>
            </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSellingProducts;