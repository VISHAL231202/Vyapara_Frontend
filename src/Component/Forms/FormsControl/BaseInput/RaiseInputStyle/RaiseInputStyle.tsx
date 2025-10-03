import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { RaiseInputStyles } from '../../../../../utils/Constant'
import RaiseInputStyleForm from './RaiseInputStyleForm'

const RaiseInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={RaiseInputStyles} headClass='pb-0' />
        <RaiseInputStyleForm />
      </Card>
    </Col>
  )
}

export default RaiseInputStyle