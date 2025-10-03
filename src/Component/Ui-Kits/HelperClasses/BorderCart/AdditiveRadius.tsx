import { Col } from 'reactstrap'
import { AdditiveRadiusHeading } from '../../../../utils/Constant'
import { H5 } from '../../../../AbstractElements'
import { radiusData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const AdditiveRadius = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100">
        <H5 className="mb-3">{AdditiveRadiusHeading}</H5>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded"></div>.rounded
        </div>
        {radiusData.map((item, index) => (
          <div className="helper-common-box" key={index}>
            <div className={`helper-radius radius-wrapper ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  )
}

export default AdditiveRadius