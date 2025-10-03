import { Col } from 'reactstrap'
import { LI, UL } from '../../../../AbstractElements'
import { LossSupportTicket, ProfitSupportTicket } from '../../../../utils/Constant'

const ProfitAndLoss = () => {
  return (
    <Col xs="7">
      <div className="text-end">
        <UL className='simple-list'>
          <LI>{ProfitSupportTicket}
            <span className="product-profit font-success ms-2">{8989}
              <i className="icon-angle-up f-12 ms-1"></i>
            </span>
          </LI>
          <LI>{LossSupportTicket}
            <span className="product-profit font-danger ms-2">{2560}
              <i className="icon-angle-down f-12 ms-1"></i>
            </span>
          </LI>
        </UL>
      </div>
    </Col>
  )
}

export default ProfitAndLoss