import { Card, CardBody, Col, Table } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Href, ManageOrderHeading, Monthly, Weekly, Yearly} from "../../../../utils/Constant";
import { H6, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { manageOrderData } from "../../../../Data/Dashboard/Ecommerce/Ecommerce";

const ManageOrder = () => {
  return (
    <Col md="6" xl="3">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={ManageOrderHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly}/>
        <CardBody className="manage-order">
          <Table>
            <tbody>
              {manageOrderData.map((data, i) => (
                <tr key={i}>
                  <td>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="flex-shrink-0">
                        <Image className="img-fluid img-42 b-r-10" src={dynamicImage(`avatar/${data.image}`)} alt="avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <Link to={Href}>
                          <H6 className="f-w-500">{data.userName}</H6>
                          <span className="f-13">{data.email}</span>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-block text-end">
                      <H6 className="f-w-500">{data.amount}</H6>
                      <span className="f-w-500">{data.sale} sale</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ManageOrder;
