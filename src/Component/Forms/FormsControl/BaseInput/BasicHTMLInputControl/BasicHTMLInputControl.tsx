import { Card, Col } from 'reactstrap'
import { BasicHtmlInputControls } from '../../../../../utils/Constant'
import BasicHTMLInputControlForm from './BasicHTMLInputControlForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BasicHTMLInputControl = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={BasicHtmlInputControls} headClass='pb-0'/>
        <BasicHTMLInputControlForm />
      </Card>
    </Col>
  )
}

export default BasicHTMLInputControl