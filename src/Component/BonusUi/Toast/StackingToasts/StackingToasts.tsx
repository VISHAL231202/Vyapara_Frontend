import { useEffect, useState } from "react";
import { Bell } from "react-feather";
import { Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { stackingToastData, stackingToastDataList } from "../../../../Data/BonusUi/Toast/Toast";
import { StackingToast } from "../../../../utils/Constant";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import CommonToast from "../Common/CommonToast";

const StackingToasts = () => {
  const [open, setOpen] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, []);
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={StackingToast} span={stackingToastData} headClass="pb-0" />
        <CardBody className="toast-rtl">
          <div className="toast-container position-static">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Bell className="feather toast-icons stroke-primary" />
                <strong className="me-auto">Edmin Template</strong>
                <small className="font-danger">just now</small>
                <Btn close className="p-0" onClick={() => setOpen(false)}></Btn>
              </div>
              <ToastBody className="toast-dark">Hello, I'm a web-designer.</ToastBody>
            </Toast>
            {stackingToastDataList.map((data, index) => (
              <CommonToast item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StackingToasts;
