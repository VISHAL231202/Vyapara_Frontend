import { Card, CardBody, Col, Input, Table } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { AllInvoicesHeading, Monthly, Weekly, Yearly } from "../../../../utils/Constant";
import AllInvoicesTableBody from "./AllInvoicesTableBody";

const AllInvoices = () => {
  return (
    <Col md="6" xl="6">
      <Card className="invoice-card">
        <CardHeaderCommon headClass="pb-0" title={AllInvoicesHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="invoice-table checkbox-checked">
          <Table responsive id="all-invoice">
            <thead>
                <tr>
                    <th>
                        <Input className="form-check-input" type="checkbox" />
                    </th>
                    <th>Invoice Id</th>
                    <th>Client Name</th>
                    <th>Project</th>
                    <th>Created Date</th>
                    <th>Amount </th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
              <AllInvoicesTableBody />
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AllInvoices;
