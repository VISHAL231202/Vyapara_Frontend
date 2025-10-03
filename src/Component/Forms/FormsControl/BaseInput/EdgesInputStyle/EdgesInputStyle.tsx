import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { EdgesInputStyles } from '../../../../../utils/Constant'
import EdgesInputStyleForm from './EdgesInputStyleForm'

const EdgesInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={EdgesInputStyles} headClass='pb-0'/>
        <EdgesInputStyleForm />
      </Card>
    </Col>
  )
}

export default EdgesInputStyle