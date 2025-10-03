import { Col } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { TextColors } from '../../../../utils/Constant'
import { textColorData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const TextColor = () => {
  return (
    <Col lg="3" sm="6">
      <div className="border-wrapper h-100 dark-helper">
        <H5 className="mb-3">{TextColors}</H5>
        <div className="helper-common-box">
          <div className="helper-box helper-text solid-border font-primary">C </div>
          <span>.font-primary</span>
        </div>
        {textColorData.map((item, index) => (
          <div className="helper-common-box" key={index}>
            <div className={`helper-box helper-text solid-border ${item} ${item === "font-light" ? "bg-dark" : ""}`}>C </div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default TextColor