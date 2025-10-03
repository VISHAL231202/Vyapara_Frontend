import { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Alerts, P } from '../../../../AbstractElements';
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon';
import { outLineLightData } from '../../../../Data/Ui-Kits/Alert/AlertData';
import { OutlineDarkLightAlerts } from '../../../../utils/Constant';
import CardHeaderCommon from '../../CardHeaderCommon';

const OutlineDarkAndLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const [visibleAlert, setVisibleAlert] = useState(true);
  const [visibleAlertThree, setVisibleAlertThree] = useState(true);
  const onDismiss = () => setVisible(false);
  const onDismissAlert = () => setVisibleAlert(false);
  const onDismissAlertThree = () => setVisibleAlertThree(false);
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={OutlineDarkLightAlerts} span={outLineLightData} headClass="pb-0" />
        <CardBody>
          <Alerts color="transparent" isOpen={visible} toggle={onDismiss} className="font-primary border-primary">
            <SvgIcon className='feather' iconId='clock' />
            <P className="text-truncate">One of <strong>YouTube's </strong> most crucial ranking factors is Watch Time.</P>
          </Alerts>
          <Alerts color="transparent" isOpen={visibleAlert} className="font-secondary border-secondary outline-2x alert-icons" toggle={onDismissAlert}>
            <SvgIcon className='feather' iconId='thumbs-up' />
            <P>One of <b>YouTubes</b>most crucial ranking factors is Watch Time.</P>
          </Alerts>
          <Alerts color="transparent" isOpen={visibleAlertThree} className="font-tertiary border-tertiary outline-2x alert-icons" toggle={onDismissAlertThree}>
            <SvgIcon className='feather' iconId='heart' />
            <P><b> Well done! </b>You successfully read this important message.</P>
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineDarkAndLightAlerts