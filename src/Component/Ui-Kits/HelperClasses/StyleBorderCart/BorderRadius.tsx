import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { CustomBorderRadiusClass } from '../../../../utils/Constant'
import { borderClass } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const BorderRadius = () => {
  return (
    <Col lg="3" sm="6">
      <div className="border-wrapper h-100 dark-helper">
        <H5 className="mb-3">{CustomBorderRadiusClass}</H5>
        <div className="helper-common-box">
          <div className="helper-box b-r-0 bg-light solid-border"></div>
          <span>.b-r-0</span>
        </div>
        {borderClass.map((item, index) => (
          <div className="helper-common-box" key={index}>
            <div className={`helper-box ${item} bg-light border`}></div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default BorderRadius