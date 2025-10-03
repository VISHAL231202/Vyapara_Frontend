import { useState } from 'react';
import { Card, CardBody, Col, Toast, ToastBody } from 'reactstrap';
import { Btn, H6, Image, P } from '../../../../AbstractElements';
import { uniqueToastData } from '../../../../Data/BonusUi/Toast/Toast';
import { dynamicImage } from '../../../../Service';
import { ImNotSure, RemoveMyAccount, UniqueToasts, YourAccountWillBePermanentlyDeleted } from '../../../../utils/Constant';
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon';

const UniqueToast = () => {
    const [open, setOpen] = useState<boolean>(true);
    return (
      <Col xl="6">
        <Card className="height-equal">
          <CardHeaderCommon title={UniqueToasts} span={uniqueToastData} headClass="pb-0"/>
          <CardBody className="toast-rtl">
            <Toast fade isOpen={open}>
              <div className="toast-img toast-header">
                <Image className="rounded me-2" src={dynamicImage(`avatar/1.jpg`)} alt="profile" />
                <strong className="me-auto">Edmin Template</strong>
                <Btn close className="p-0" onClick={() => setOpen(false)}></Btn>
              </div>
              <ToastBody className="toast-dark">
                <H6 className="mb-2">{YourAccountWillBePermanentlyDeleted}</H6>
                <P className="mb-0">Do you intend to continue?</P>
                <div className="mt-2 pt-2 border-top d-flex gap-2">
                  <Btn color="dark" size="sm">{ImNotSure}</Btn>
                  <Btn color="danger" size="sm" onClick={() => setOpen(false)}>{RemoveMyAccount}</Btn>
                </div>
              </ToastBody>
            </Toast>
          </CardBody>
        </Card>
      </Col>
    );
}

export default UniqueToast