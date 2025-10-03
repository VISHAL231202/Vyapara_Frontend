import React from 'react'
import { Col } from 'reactstrap'
import { H5, Image } from '../../../../AbstractElements'
import { WilliamJennings } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import { CommonTourHeaderProp } from '../../../../Type/BonusUi/BonusUiTypes'

const CommonTourHeader:React.FC<CommonTourHeaderProp> = ({ date, time }) => {
  return (
    <Col sm="8">
      <div className="d-flex">
        <Image className="img-thumbnail rounded-circle me-3" src={dynamicImage(`avatar/5.jpg`)} alt="Generic placeholder" />
        <div className="flex-grow-1 align-self-center">
          <H5 className="mt-0 user-name">{WilliamJennings}</H5>
          <div className="tour-wrapper">
            <span>{date}</span>
            <i className="tour-dot font-light fa fa-circle"></i>
            <span className="font-danger">{time}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default CommonTourHeader