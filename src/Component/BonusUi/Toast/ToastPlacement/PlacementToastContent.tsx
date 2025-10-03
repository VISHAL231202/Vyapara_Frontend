import { Toast, ToastBody, ToastHeader } from 'reactstrap'
import { Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { PlacementToastContentProp } from '../../../../Type/BonusUi/BonusUiTypes'

const PlacementToastContent:React.FC<PlacementToastContentProp> = ({ data }) => {
  return (
    <div className="bg-light position-relative bd-example-toasts">
      <div className={`toast-container p-3 position-absolute ${data}`}>
        <Toast fade>
          <ToastHeader className="toast-img">
            <Image className="rounded me-2" src={dynamicImage(`avatar/1.jpg`)} alt="profile" />
            <strong className="me-auto">Edmin Template</strong>
            <small className="d-sm-block d-none">25 min ago</small>
          </ToastHeader>
          <ToastBody className="toast-dark font-dark">
            <P className="toast-content"><em className="font-danger">Attackers</em> on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.</P>
          </ToastBody>
        </Toast>
      </div>
    </div>
  )
}

export default PlacementToastContent