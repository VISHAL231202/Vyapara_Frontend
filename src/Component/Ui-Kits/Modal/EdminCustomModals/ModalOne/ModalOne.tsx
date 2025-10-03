import { useState } from 'react'
import { Col } from 'reactstrap';
import { Btn, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { ClickOut } from '../../../../../utils/Constant';
import CommonEdminModalTitle from '../Common/CommonEdminModalTitle';
import ProfileModal from './ProfileModal';

const ModalOne = () => {
  const [modalOne, setModalOne] = useState<boolean>(false);
  const modalOneToggle = () => setModalOne(!modalOne);
  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="edmin-demo-img">
          <CommonEdminModalTitle heading="Modal 1 -" subHeading="Profile Modal" text="Example of Edmin dashboard profile card." />
          <div className="overflow-hidden">
            <Image className="image-fluid" src={dynamicImage(`alert/social.png`)} alt="social" />
            <Btn color="primary" className="mx-auto mt-3" onClick={modalOneToggle}>{ClickOut}</Btn>
          </div>
          <ProfileModal modalOne={modalOne} modalOneToggle={modalOneToggle} />
        </div>
      </div>
    </Col>
  )
}

export default ModalOne