import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { BorderColor } from '../../../../utils/Constant'
import { borderColorCartData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const BorderColors = () => {
  return (
    <Col lg="3" sm="6">
      <div className="border-wrapper h-10 dark-helper">
        <H5 className="mb-3">{BorderColor}</H5>
        <div className="helper-common-box">
          <div className="helper-box border-primary"></div>
          <span>.border-primary</span>
        </div>
        {borderColorCartData.map((item, index) => (
          <div className="helper-common-box" key={index}>
            <div className={`helper-box ${item}`}></div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default BorderColors