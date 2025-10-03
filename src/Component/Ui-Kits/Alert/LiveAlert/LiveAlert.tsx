import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { LiveAlerts, ShowLiveAlert } from '../../../../utils/Constant';
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { liveAlertData } from '../../../../Data/Ui-Kits/Alert/AlertData';
import CardHeaderCommon from '../../CardHeaderCommon';

const LiveAlert = () => {
  const [data, setData] = useState<string[]>([]);
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  const dataShown = (key: number) => {
    setData(data.filter((item, index) => index !== key));
  };
  return (
    <Col lg="6">
      <Card className='height_equal'>
        <CardHeaderCommon title={LiveAlerts} span={liveAlertData} headClass='pb-0' />
        <CardBody className="live-dark">
          <Alerts color="light-info" isOpen={visible} toggle={onDismiss} className="font-info">
            <P className="text-truncate">Oh snap! Change a few things up Notification check</P>
          </Alerts>
          {data.length > 0 &&
            data.map((item, index) => (
              <Alerts fade color="light-dark" className="alert-dismissible" key={index}>
                <P className="text-dark">Nice, you triggered this alert message!</P>
                <Btn close onClick={() => dataShown(index)}></Btn>
              </Alerts>
            ))}
          <Btn color="dark" onClick={() => setData(() => [...data, "Alerts"])}>{ShowLiveAlert}</Btn>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LiveAlert