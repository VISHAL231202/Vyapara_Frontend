import { Card, Col } from 'reactstrap'
import { FlatInputStyles } from '../../../../../utils/Constant'
import FlatInputStyleForm from './FlatInputStyleForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const FlatInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FlatInputStyles} headClass="pb-0" />
        <FlatInputStyleForm />
      </Card>
    </Col>
  )
}

export default FlatInputStyle