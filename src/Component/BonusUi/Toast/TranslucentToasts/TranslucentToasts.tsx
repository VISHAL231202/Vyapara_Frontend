import { useEffect, useState } from "react";
import { Disc } from "react-feather";
import { Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { translucentToastData, translucentToastDataList } from "../../../../Data/BonusUi/Toast/Toast";
import { TranslucentToast } from "../../../../utils/Constant";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import CommonToast from "../Common/CommonToast";

const TranslucentToasts = () => {
  const [open, setOpen] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 8000);
  }, []);
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={TranslucentToast} span={translucentToastData} headClass="pb-0" />
        <CardBody className="toast-rtl bg-dark">
          <div className="toast-container">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Disc className="feather toast-icons toast-info" />
                <strong className="me-auto">Edmin Template</strong>
                <small className="d-sm-block d-none">11 mins ago</small>
                <Btn close className="p-0" onClick={() => setOpen(false)}></Btn>
              </div>
              <ToastBody className="toast-dark"> Hello, I'm a web-designer.</ToastBody>
            </Toast>
            {translucentToastDataList.map((data, index) => (
              <CommonToast item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TranslucentToasts;
