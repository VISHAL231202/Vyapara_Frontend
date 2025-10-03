import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { LightBackground } from '../../../../utils/Constant'
import { lightBackgroundData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const LightBackgrounds = () => {
  return (
    <Col xl="6" sm="6">
      <div className="border-wrapper h-100">
        <H5 className="mb-3">{LightBackground}</H5>
        <div className="helper-common-box">
          <div className="helper-box bg-light-primary"> </div>.alert-light-primary
        </div>
        {lightBackgroundData.map((item, index) => (
          <div className="helper-common-box" key={index}>
            <div className={`helper-box ${item}`}> </div>.{item}
          </div>
        ))}
      </div>
    </Col>
  )
}

export default LightBackgrounds