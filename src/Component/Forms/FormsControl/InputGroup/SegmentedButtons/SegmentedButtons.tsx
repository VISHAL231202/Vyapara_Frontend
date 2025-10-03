import { Card, CardBody, Col, Form, Input, InputGroup } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { buttonWithDropForth, buttonWithDropOne, buttonWithDropThird, buttonWithDropTwo, segmentButtonData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'
import { Danger, Info, Primary, SegmentedButton, SegmentedButtonSecondary } from '../../../../../utils/Constant'
import ButtonDropdownList from '../ButtonsWithDropdowns/ButtonDropdownList'

const SegmentedButtons = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={SegmentedButton} span={segmentButtonData} />
        <CardBody className="card-wrapper input-group-wrapper">
          <Form className="theme-form row g-3">
            <InputGroup>
              <Btn outline color="primary">{Primary} </Btn>
              <ButtonDropdownList color="primary" outline={true} divider={true} options={buttonWithDropOne}/>
              <Input type="text" />
            </InputGroup>
            <InputGroup>
              <Input type="text" />
              <Btn outline color="secondary">{SegmentedButtonSecondary}</Btn>
              <ButtonDropdownList color="secondary" outline={true} divider={true} options={buttonWithDropTwo}/>
            </InputGroup>
            <InputGroup>
              <Btn outline color="danger">{Danger} </Btn>
              <ButtonDropdownList color="danger" divider={true} options={buttonWithDropThird} />
              <Input type="text" />
            </InputGroup>
            <InputGroup>
              <Input type="text" />
              <Btn outline color="info">{Info} </Btn>
              <ButtonDropdownList color="info" divider={true} options={buttonWithDropForth} />
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SegmentedButtons