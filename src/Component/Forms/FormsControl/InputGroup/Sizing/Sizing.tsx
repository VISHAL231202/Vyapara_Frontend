import { Card, CardBody, Col, Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { DefaultInput, LargeInput, Sizings, SmallInput } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { sizingDatas } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'

const Sizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={Sizings} span={sizingDatas} headClass='pb-0' />
        <CardBody className="card-wrapper input-group-wrapper">
          <Form className="theme-form row g-3">
            <InputGroup size="sm">
              <InputGroupText id="inputGroup-sizing-sm">{SmallInput}</InputGroupText>
              <Input type="text" />
            </InputGroup>
            <InputGroup size="default">
              <InputGroupText id="inputGroup-sizing-default">{DefaultInput}</InputGroupText>
              <Input type="text" />
            </InputGroup>
            <InputGroup size="lg">
              <InputGroupText id="inputGroup-sizing-lg">{LargeInput}</InputGroupText>
              <Input type="text" />
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Sizing