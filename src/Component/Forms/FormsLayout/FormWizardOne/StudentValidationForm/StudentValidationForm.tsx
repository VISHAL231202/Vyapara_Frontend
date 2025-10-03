import { Card, CardBody, Col } from 'reactstrap'
import { StudentValidationFormHeading } from '../../../../../utils/Constant'
import { studentValidationData } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne'
import StudentValidationFormCardBody from './StudentValidationFormCardBody'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const StudentValidationForm = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={StudentValidationFormHeading} span={studentValidationData} headClass='pb-0'/>
        <CardBody className="custom-input">
          <StudentValidationFormCardBody />
        </CardBody>
      </Card>
    </Col>
  )
}

export default StudentValidationForm