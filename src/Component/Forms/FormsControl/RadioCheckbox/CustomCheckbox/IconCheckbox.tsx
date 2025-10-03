import { Col, Input, Label } from 'reactstrap'
import { IconCheckboxHeading } from '../../../../../utils/Constant'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { customCheckboxList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const IconCheckbox = () => {
  return (
    <Col xxl="4" sm="12" className="order-xxl-0 order-sm-1">
      <div className="card-wrapper solid-border rounded-3">
        <H6 className="sub-title f-w-500">{IconCheckboxHeading}</H6>
        <div className="form-check ps-0 main-icon-checkbox">
          <UL className="checkbox-wrapper simple-list flex-row">
            <LI>
              <Input className="form-check-input checkbox-shadow" id="checkbox-icon" type="checkbox" />
              <Label check>
                <i className="fa fa-sliders" /><span>Sliders</span>
              </Label>
            </LI>
            {customCheckboxList.map(({ icon, id, text, defaultChecked }, index) => (
              <LI key={index}>
                <Input className="checkbox-shadow" id={`checkbox-icon-${id}`} type="checkbox" defaultChecked={defaultChecked} />
                <Label check>
                  <i className={icon}></i>
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

export default IconCheckbox