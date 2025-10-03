import { Card, CardBody, Col, Form, Input, InputGroup } from 'reactstrap'
import { AddonPlaceHolder, ButtonAddon, SubmitButtonAddon, SubmitButtonAddonPlaceHolder } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'
import { buttonAddonData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const ButtonAddons = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ButtonAddon} span={buttonAddonData} headClass='pb-0'/>
        <CardBody className="card-wrapper input-group-wrapper">
          <Form className="theme-form row g-3">
            <InputGroup>
              <Btn color='primary' outline id="buttonAddon1">{'$ 25'}</Btn>
              <Input type="text" id="buttonAddon1"/>
            </InputGroup>
            <InputGroup>
              <Input type="text" placeholder={SubmitButtonAddonPlaceHolder} id="buttonAddon2"/>
              <Btn color='primary' outline id="buttonAddon2">{SubmitButtonAddon}</Btn>
            </InputGroup>
            <InputGroup>
              <Btn color='primary'><span>&#8364; </span></Btn>
              <Btn color='tertiary'>{'0.0114419'}</Btn>
              <Input type="text"/>
            </InputGroup>
            <InputGroup>
              <Input type="text" placeholder={AddonPlaceHolder}/>
              <Btn color='tertiary'><span>&#8377;</span></Btn>
              <Btn color='primary'>{'500'}</Btn>  
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ButtonAddons