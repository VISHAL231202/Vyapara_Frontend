import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Progress, UiKits } from "../../../utils/Constant";
import BasicProgressBarsCart from "./BasicProgressBarsCart/BasicProgressBarsCart";
import CustomHeightProgressBarsCart from "./CustomHeightProgressBarsCart/CustomHeightProgressBarsCart";
import CustomProgressBarsCart from "./CustomProgressBarsCart/CustomProgressBarsCart";
import LargeProgressBarsCart from "./LargeProgressBarsCart/LargeProgressBarsCart";
import MultipleBarsCart from "./MultipleBarsCart/MultipleBarsCart";
import ProgressBarsAnimatedCart from "./ProgressBarsAnimatedCart/ProgressBarsAnimatedCart";
import ProgressBarsStripedCart from "./ProgressBarsStripedCart/ProgressBarsStripedCart";
import ProgressWithNumberStepsCart from "./ProgressWithNumberStepsCart/ProgressWithNumberStepsCart";
import SmallProgressBarsCart from "./SmallProgressBarsCart/SmallProgressBarsCart";

const ProgressContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Progress} parent={UiKits} />
      <Container fluid>
        <Row>
          <BasicProgressBarsCart />
          <ProgressBarsStripedCart />
          <ProgressBarsAnimatedCart />
          <MultipleBarsCart />
          <ProgressWithNumberStepsCart />
          <CustomProgressBarsCart />
          <SmallProgressBarsCart />
          <LargeProgressBarsCart />
          <CustomHeightProgressBarsCart />
        </Row>
      </Container>
    </>
  );
};

export default ProgressContainer;
