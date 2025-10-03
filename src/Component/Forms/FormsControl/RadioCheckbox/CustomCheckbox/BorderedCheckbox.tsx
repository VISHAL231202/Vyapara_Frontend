import { Col, Input, Label } from 'reactstrap'
import { BorderedCheckboxHeading, PrimaryCheckboxPrimary } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { borderCheckboxData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const BorderedCheckbox = () => {
  return (
    <Col xxl="4" sm="6">
      <div className="card-wrapper solid-border rounded-3">
        <H6 className="sub-title f-w-500">{BorderedCheckboxHeading}</H6>
          <Label for='checkbox-primary-1' className="d-block" check>
            <Input id="checkbox-primary-1" color='primary' className='checkbox-primary checkbox-border-primary' type="checkbox" defaultChecked />{PrimaryCheckboxPrimary}
          </Label>
        {borderCheckboxData.map(({ color, text }, i) => (
          <Label className="d-block" for={`checkbox-${color}`} check key={i}>
            <Input className={`checkbox-${color} checkbox-border-${color}`} id={`checkbox-${color}`} type="checkbox" />{text}
          </Label>
        ))}
      </div>
    </Col>
  )
}

export default BorderedCheckbox