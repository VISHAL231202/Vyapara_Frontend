import { Card, CardBody, Col, Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { CheckboxesAndRadio } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { checkAndRadioData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'

const CheckboxesAndRadios = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={CheckboxesAndRadio} span={checkAndRadioData} headClass='pb-0'/>
        <CardBody className="card-wrapper input-group-wrapper checkbox-checked">
          <Form className="theme-form row g-5">
            <InputGroup>
              <InputGroupText>
                <Input className="mt-0" type="checkbox" />
              </InputGroupText>
              <Input type="text"/>
            </InputGroup>
            <InputGroup>
              <InputGroupText>
                <Input className="mt-0" type="radio" defaultChecked/>
              </InputGroupText>
              <Input type="text"/>
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CheckboxesAndRadios