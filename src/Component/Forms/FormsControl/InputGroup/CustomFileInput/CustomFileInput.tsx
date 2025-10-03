import { Card, CardBody, Col, Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { CustomFileInputs, CustomFileInputsSubmit, CustomFileInputsUpload, CustomFileInputsVerify } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'
import { customFileInputData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const CustomFileInput = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CustomFileInputs} span={customFileInputData} headClass='pb-0' />
        <CardBody className="card-wrapper input-group-wrapper">
          <Form className="theme-form row g-3">
            <InputGroup>
              <InputGroupText>{CustomFileInputsUpload}</InputGroupText>
              <Input id="inputGroupFile01" type="file" />
            </InputGroup>
            <InputGroup>
              <Input id="inputGroupFile02" type="file" />
              <InputGroupText>{CustomFileInputsVerify}</InputGroupText>
            </InputGroup>
            <InputGroup>
              <Btn color='success' id="inputGroupFileAddon03" outline>
                <i className="icofont icofont-ui-copy"></i>
              </Btn>
              <Input id="inputGroupFile03" type="file" />
            </InputGroup>
            <InputGroup>
              <Input id="inputGroupFile04" type="file" />
              <Btn color='success' id="inputGroupFileAddon04" outline>{CustomFileInputsSubmit}</Btn>
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomFileInput