import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { AlertsWithIconsTextActions, Check } from "../../../../utils/Constant";
import { iconTextData } from "../../../../Data/Ui-Kits/Alert/AlertData";
import { Alerts, Btn, P } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const AlertsWithIconsAndTextActions = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [visibleAlert, setVisibleAlert] = useState<boolean>(true);
  const [visibleAlertThree, setVisibleAlertThree] = useState(true);
  const onDismiss = () => setVisible(false);
  const onDismissAlert = () => setVisibleAlert(false);
  const onDismissAlertThree = () => setVisibleAlertThree(false);
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={AlertsWithIconsTextActions} span={iconTextData} headClass="pb-0"/>
        <CardBody className="dark-txt">
          <Alerts color="transparent" fade isOpen={visible} className="border-success alert-dismissible p-0" >
            <div className="alert-arrow bg-success">
              <SvgIcon iconId="clock" className="feather" />
            </div>
            <P>Your time Over after <strong className="font-dark">5</strong> minute</P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={onDismiss}>
              <span className="bg-success px-3 py-1">{Check}</span>
            </Btn>
          </Alerts>
          <Alerts color="transparent" fade isOpen={visibleAlert} className="border-info alert-dismissible p-0" >
            <div className="alert-arrow bg-info">
              <SvgIcon iconId="heart" className="feather" />
            </div>
            <P>
              Oh snap! Change a few things up
              <strong className="font-dark"> Notification check</strong>
            </P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={onDismissAlert}>
              <span className="bg-info px-3 py-1">{'Alert'}</span>
            </Btn>
          </Alerts>
          <Alerts color="transparent" fade isOpen={visibleAlertThree} className="border-warning alert-dismissible p-0" >
            <div className="alert-arrow bg-warning">
              <SvgIcon iconId="youtube" className="feather" />
            </div>
            <P>One of <strong className="font-dark"> YouTube's</strong>most crucial ranking factors is Watch Time.
            </P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={onDismissAlertThree}>
              <span className="bg-warning px-3 py-1">{'Show'}</span>
            </Btn>
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertsWithIconsAndTextActions;
