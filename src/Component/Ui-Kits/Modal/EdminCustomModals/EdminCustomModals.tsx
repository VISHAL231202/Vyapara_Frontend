import { Card, CardBody, Col, Row } from 'reactstrap'
import { EdminCustomModal } from '../../../../utils/Constant'
import { customModalData } from '../../../../Data/Ui-Kits/Modal/Modal'
import ModalOne from './ModalOne/ModalOne'
import ModalTwo from './ModalTwo/ModalTwo'
import ModalThird from './ModalThird/ModalThird'
import CardHeaderCommon from '../../CardHeaderCommon'

const EdminCustomModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={EdminCustomModal} span={customModalData} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <ModalOne />
            <ModalTwo />
            <ModalThird />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default EdminCustomModals