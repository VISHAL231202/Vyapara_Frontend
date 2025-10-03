import { Col, Row } from 'reactstrap'
import { Cancel, BasicSubmitButton } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'

const CommonFormFooter = () => {
  return (
    <Row>
      <Col></Col>
      <div className="text-end">
        <Btn color="primary" className="me-3 btn-square" >
          {BasicSubmitButton}
        </Btn>
        <Btn color="danger" type="reset" className='btn-square' >
          {Cancel}
        </Btn>
      </div>
    </Row>
  )
}

export default CommonFormFooter