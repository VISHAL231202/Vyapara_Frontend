import { useEffect, useState } from 'react';
import { Card, CardBody, Col, Toast, ToastBody } from 'reactstrap';
import { Btn, Image } from '../../../../AbstractElements';
import { defaultToastData } from '../../../../Data/BonusUi/Toast/Toast';
import { dynamicImage } from '../../../../Service';
import { DefaultToasts } from '../../../../utils/Constant';
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon';

const DefaultToast = () => {
    const [open, setOpen] = useState(true);
    useEffect (()=>{
      setTimeout(()=>{
        setOpen(false)
      },10000)
    },[])
    return (
      <Col xl="6">
        <Card className="height-equal">
          <CardHeaderCommon title={DefaultToasts} span={defaultToastData} headClass='pb-0' />
          <CardBody className="toast-rtl">
            <Toast className="default-show-toast" isOpen={open}>
              <div className="toast-img toast-header">
                <Image className="rounded me-2" src={dynamicImage(`avatar/9.jpg`)} alt="profile" />
                <strong className="me-auto">Edmin Template</strong>
                <small className="d-sm-block d-none">10 min ago</small>
                <Btn close className="p-0" onClick={() => setOpen(false)}></Btn>
              </div>
              <ToastBody className="toast-dark">
                <strong className="font-success">Well done!</strong> You successfully read this important message.
              </ToastBody>
            </Toast>
          </CardBody>
        </Card>
      </Col>
    );
}

export default DefaultToast