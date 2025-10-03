import { Card, CardBody, Col, Table } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { BestSellersHeading, Monthly, Weekly, Yearly } from "../../../../utils/Constant";
import BestSellersTableBody from "./BestSellersTableBody";

const BestSellers = () => {
  return (
    <Col md="12" xl="4">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={BestSellersHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="pt-0 seller-table">
            <Table responsive>
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Price</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <BestSellersTableBody />
              </tbody>
            </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BestSellers;
