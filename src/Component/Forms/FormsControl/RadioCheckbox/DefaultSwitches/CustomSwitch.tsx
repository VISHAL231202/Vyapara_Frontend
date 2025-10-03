import { Col, Input, Label } from 'reactstrap'
import { CheckedSwitchCheckboxInput, CustomSwitches, DefaultSwitchCheckboxInput } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const CustomSwitch = () => {
  return (
    <Col md="6" xl="4">
      <div className="card-wrapper solid-border rounded-3 rtl-input">
        <H6 className="sub-title f-w-500">{CustomSwitches}</H6>
        <div className="form-check form-switch">
          <Input id="flexSwitchCheckDefault" type="switch" />
          <Label check for='flexSwitchCheckDefault'>
            {DefaultSwitchCheckboxInput}
          </Label>
        </div>
        <div className="form-check form-switch">
          <Input id="flexSwitchCheckChecked" type="switch" defaultChecked />
          <Label for='flexSwitchCheckChecked' check>
            {CheckedSwitchCheckboxInput}
          </Label>
        </div>
      </div>
    </Col>
  )
}

export default CustomSwitch