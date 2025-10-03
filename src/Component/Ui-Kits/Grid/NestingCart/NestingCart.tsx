import { Card, CardBody, Col, Row } from 'reactstrap'
import NestingCardBody from './NestingCardBody'
import { Nesting } from '../../../../utils/Constant'
import { nestingData } from '../../../../Data/Ui-Kits/Grid/GridData'
import CardHeaderCommon from '../../CardHeaderCommon'

const NestingCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={Nesting} span={nestingData} headClass='pb-0' />
        <CardBody className="grid-showcase">
          <Row className="g-3">
            <NestingCardBody />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default NestingCart