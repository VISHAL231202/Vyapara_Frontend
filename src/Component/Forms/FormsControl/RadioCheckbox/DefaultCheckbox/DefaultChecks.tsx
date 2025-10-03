import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { CheckedCheckbox, DefaultCheck, DefaultCheckBox } from '../../../../../utils/Constant'

const DefaultChecks = () => {
  return (
    <Col sm="6" xxl="4">
      <div className="card-wrapper solid-border rounded-3">
        <H6 className="sub-title f-w-500">{DefaultCheck}</H6>
        <div className="form-check">
          <Input id="flexCheckDefault" type="checkbox" />
          <Label for='flexCheckDefault' check>{DefaultCheckBox}</Label>
        </div>
        <div className="form-check">
          <Input id="flexCheckChecked" type="checkbox" defaultChecked />
          <Label for='flexCheckChecked' check>{CheckedCheckbox}</Label>
        </div>
      </div>
    </Col>
  )
}

export default DefaultChecks