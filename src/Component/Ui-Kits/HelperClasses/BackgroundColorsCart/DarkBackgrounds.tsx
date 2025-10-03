import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { DarkBackground } from '../../../../utils/Constant'
import { darkBackgroundData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const DarkBackgrounds = () => {
  return (
    <Col xl="6" sm="6">
      <div className="border-wrapper h-100">
        <H5 className="mb-3">{DarkBackground}</H5>
        <div className="helper-common-box">
          <div className="helper-box bg-primary"></div>.bg-primary
        </div>
        {darkBackgroundData.map((item, index) => (
          <div className="helper-common-box" key={index}>
            <div className={`helper-box ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  )
}

export default DarkBackgrounds