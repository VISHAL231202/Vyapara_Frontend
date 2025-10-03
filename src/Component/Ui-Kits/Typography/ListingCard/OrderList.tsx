import { Col } from 'reactstrap'
import { OrderLists } from '../../../../utils/Constant'
import { H6, LI, OL } from '../../../../AbstractElements'

const OrderList = () => {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper rounded-3 h-100 bg-light-secondary">
        <H6 className="sub-title f-w-600">{OrderLists}</H6>
        <OL className="mb-0">
          <LI>{"UI Kits"}</LI>
          <LI>{"Bonus Ui"}</LI>
          <LI>{"Animations"}</LI>
          <LI>
            {"Icon"}
            <OL>
              <LI>{"Typography"}</LI>
              <LI>{"Avatars"}</LI>
              <LI>{"Grid"}</LI>
              <LI>{"Tag & pills"}</LI>
              <LI>{"Alert"}</LI>
            </OL>
          </LI>
          <LI>{"Dropdown"}</LI>
          <LI>{"Tabs"}</LI>
          <LI>{"Accordion"}</LI>
        </OL>
      </div>
    </Col>
  )
}

export default OrderList