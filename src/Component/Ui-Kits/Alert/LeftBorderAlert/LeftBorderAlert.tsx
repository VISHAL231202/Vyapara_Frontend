import { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Alerts, P } from '../../../../AbstractElements';
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon';
import { leftData } from '../../../../Data/Ui-Kits/Alert/AlertData';
import { LeftBorderAlerts } from '../../../../utils/Constant';
import CardHeaderCommon from '../../CardHeaderCommon';

const LeftBorderAlert = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [visibleAlert, setVisibleAlert] = useState(true);
  const onDismiss = () => setVisible(false);
  const onDismissAlert = () => setVisibleAlert(false);

  return (
    <Col lg="6">
      <Card className='height_equal'>
        <CardHeaderCommon title={LeftBorderAlerts} span={leftData} headClass='pb-0' />
        <CardBody className="live-dark">
          <Alerts fade isOpen={visible} color="light-primary" className=" b-l-primary" toggle={onDismiss}>
            <SvgIcon iconId='help-circle' className='feather' />
            <P>You can check in on some of those fields below.</P>
          </Alerts>
          <Alerts fade isOpen={visibleAlert} color="light-secondary" className=" b-l-secondary mb-0" toggle={onDismissAlert}>
            <SvgIcon iconId='help-circle' className='feather' />
            <P>Well done! You successfully read this important message.</P>
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LeftBorderAlert