import { Col, Input, Label } from 'reactstrap'
import { IndeterminateHeading, IndeterminateCheckbox } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const Indeterminate = () => {
  return (
    <Col xxl="12" sm="6">
      <div className="card-wrapper solid-border rounded-3">
        <H6 className="sub-title f-w-500">{IndeterminateHeading}</H6>
        <div className="form-check">
          <Input id="flexCheckIndeterminate" type="checkbox" />
          <Label for="flexCheckIndeterminate" check>{IndeterminateCheckbox}</Label>
        </div>
      </div>
    </Col>
  )
}

export default Indeterminate