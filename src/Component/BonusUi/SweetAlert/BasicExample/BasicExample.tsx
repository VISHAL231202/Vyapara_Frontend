import { Card, CardBody, Col } from 'reactstrap';
import { BasicExamples } from '../../../../utils/Constant';
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon';
import ClickItBtn from './ClickItBtn';
import InformationalBtn from './InformationalBtn';
import TitleWithTextBtn from './TitleWithTextBtn';
import WarningAlertsBtn from './WarningAlertsBtn';

const BasicExample = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={BasicExamples} headClass='pb-0'/>
        <CardBody className="btn-showcase">
          <ClickItBtn />
          <TitleWithTextBtn />
          <InformationalBtn />
          <WarningAlertsBtn />
        </CardBody>
      </Card>
    </Col>
  );
}

export default BasicExample