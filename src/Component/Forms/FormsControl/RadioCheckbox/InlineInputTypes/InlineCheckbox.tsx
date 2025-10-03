import { Col, Input, Label } from 'reactstrap'
import { InlineCheckboxHeading } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { inlineCheckboxData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const InlineCheckbox = () => {
  return (
    <Col md="6" xl="4">
      <div className="card-wrapper solid-border rounded-3 rtl-input">
        <H6 className="sub-title f-w-500">{InlineCheckboxHeading}</H6>
        <div className="form-check-size">
          <div className="form-check form-check-inline">
            <Input className="me-2" id="inlineCheckbox1" type="checkbox" defaultChecked />
            <Label for='inlineCheckbox1' check>I</Label>
          </div>
          {inlineCheckboxData.map(({ id, text, disabled }, index) => (
            <div className="form-check form-check-inline" key={index}>
              <Input className="me-2" id={id} type="checkbox" disabled={disabled} />
              <Label for={id} check>
                {text}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default InlineCheckbox