import { Col, Input, Label } from 'reactstrap'
import { IconsRadios } from '../../../../../utils/Constant'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { customRadioList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const IconsRadio = () => {
  return (
    <Col xxl="4" sm="12" className="order-xxl-0 order-sm-1">
      <div className="card-wrapper solid-border rounded-3">
        <H6 className="sub-title fw-bold">{IconsRadios}</H6>
        <div className="form-check radio ps-0">
          <UL className="radio-wrapper simple-list flex-row">
            <LI>
              <Input id="radio-icon" type="radio" name="radio2"/>
              <Label check for='radio-icon'>
                <i className="fa fa-sliders"></i><span>Sliders</span>
              </Label>
            </LI>
            {customRadioList.map(({ icon, id, text, defaultChecked }, index) => (
              <LI key={index}>
                <Input className="checkbox-shadow" id={`radio-${id}`} type="radio" defaultChecked={defaultChecked} name="radio2" />
                <Label for={`radio-${id}`} check>
                  <i className={`fa fa-${icon}`}></i>
                  <span>{text}</span>
                </Label>
              </LI>
            ))}
          </UL>
        </div>
      </div>
    </Col>
  )
}

export default IconsRadio