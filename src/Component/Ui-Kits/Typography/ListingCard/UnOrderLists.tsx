import { Col } from 'reactstrap'
import { H6, LI, UL } from '../../../../AbstractElements'
import { UnOrderList } from '../../../../utils/Constant'
import { unOrderData } from '../../../../Data/Ui-Kits/Typography/Typography'

const UnOrderLists = () => {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper h-100 bg-light-primary rounded-3">
        <H6 className="sub-title f-w-600">{UnOrderList}</H6>
        <UL className="simple-list">
          <LI>{"One who looks on the bright side of things"}</LI>
          {unOrderData.map((item, index) => (
            <LI key={index}>{item}</LI>
          ))}
        </UL>
      </div>
    </Col>
  )
}

export default UnOrderLists