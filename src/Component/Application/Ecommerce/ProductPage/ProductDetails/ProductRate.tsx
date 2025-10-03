import { Col, Row } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { RateNow } from '../../../../../utils/Constant'
import CommonRating from '../../CommonRating/CommonRating'

const ProductRate = () => {
  return (
    <Row>
      <Col md="4">
        <H6 className="product-title">{RateNow}</H6>
      </Col>
      <Col md="8">
        <div className="d-flex">
          <CommonRating />
          <span>(250 review)</span>
        </div>
      </Col>
    </Row>
  )
}

export default ProductRate