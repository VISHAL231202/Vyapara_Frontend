import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import { Href, OutlineBreadcrumbHeading } from "../../../../utils/Constant";
import { outlineBreadcrumbData } from "../../../../Data/BonusUi/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const OutlineBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={OutlineBreadcrumbHeading} span={outlineBreadcrumbData} />
        <CardBody>
          <Breadcrumb className="breadcrumb-colored mb-4 bg-outline-primary">
            <BreadcrumbItem>
              <Link to={Href}>{`Home`}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={Href}>{`Ui Kits`}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{`Avatars`}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="breadcrumb-colored mb-4 bg-outline-secondary">
            <BreadcrumbItem>
              <Link to={Href}>{`Home`}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={Href}>{`Bonus Ui`}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{`Rating`}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="breadcrumb-colored mb-4 bg-outline-tertiary">
            <BreadcrumbItem>
              <Link to={Href}>{`Home`}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={Href}>{`Buttons`}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{`Button Group`}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineBreadcrumb;
