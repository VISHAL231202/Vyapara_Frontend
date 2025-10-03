import { Card, CardBody, Col, Row } from 'reactstrap'
import { InlineInputType } from '../../../../../utils/Constant'
import InlineCheckbox from './InlineCheckbox'
import InlineRadios from './InlineRadios'
import InlineSwitch from './InlineSwitch'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { inlineInputData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const InlineInputTypes = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={InlineInputType} span={inlineInputData} headClass='pb-0' />
        <CardBody className='checkbox-checked'>
          <Row className="g-3">
            <InlineCheckbox />
            <InlineRadios />
            <InlineSwitch />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default InlineInputTypes