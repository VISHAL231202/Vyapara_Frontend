import { Card, CardBody, Col } from 'reactstrap'
import { BasicModal } from '../../../../utils/Constant'
import SimpleModal from './SimpleModal'
import { basicData } from '../../../../Data/Ui-Kits/Modal/Modal'
import ScrollingModal from './ScrollingModal'
import ToolTipAndPopover from './ToolTipAndPopover/ToolTipAndPopover'
import OpenModalEdmin from './OpenModalEdmin/OpenModalEdmin'
import CardHeaderCommon from '../../CardHeaderCommon'

const BasicModalCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={BasicModal} span={basicData} headClass='pb-0'/>
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <ToolTipAndPopover />
          <OpenModalEdmin />
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicModalCart