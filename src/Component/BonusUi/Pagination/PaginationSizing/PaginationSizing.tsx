import { Card, CardBody, Col } from "reactstrap";
import { PaginationSizings } from "../../../../utils/Constant";
import { sizingPaginationData } from "../../../../Data/BonusUi/Pagination/Pagination";
import StaticPaginationSizing from "./StaticPaginationSizing/StaticPaginationSizing";
import DynamicPaginationSizing from "./DynamicPaginationSizing/DynamicPaginationSizing";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";

const PaginationSizing = () => {
  return (
    <Col xxl="6">
      <Card>
        <CardHeaderCommon title={PaginationSizings} span={sizingPaginationData} headClass="pb-0"/>
        <CardBody className="pb-4">
          <StaticPaginationSizing />
          <DynamicPaginationSizing />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizing;
