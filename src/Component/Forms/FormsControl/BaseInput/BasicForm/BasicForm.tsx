import { Card, CardBody, Col } from 'reactstrap'
import { basicFormSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { FormBasics } from '../../../../../utils/Constant'
import FormBasic from './FormBasic'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BasicForm = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FormBasics} span={basicFormSubTitle} headClass='pb-0' />
        <CardBody>
          <FormBasic />
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicForm