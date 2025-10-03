import { Fragment } from 'react'
import { rightRibbonDataList } from '../../../../Data/BonusUi/Ribbons/Ribbons'
import { Col } from 'reactstrap'
import { P, SVG } from '../../../../AbstractElements'
import { RibbonProp } from '../../../../Type/BonusUi/BonusUiTypes'

const DynamicRightRibbons = () => {
  return (
    <>
      {rightRibbonDataList.map(({ className, ribbonClass, title, span, icon ,iconClass}: RibbonProp, index) => (
        <Col sm="6" xl="4" key={index}>
          <div className={`border border-1 height-equal ${className ? className : ""}`}>
            <div className={`ribbon ${ribbonClass}`}>
              {title && title}
              {icon && <SVG className={iconClass} iconId={icon} />}
            </div>
            <P>
              {span.map(({ spanText, text }, index) => (
                <Fragment key={index}>
                  {text && text}
                  {spanText && <em className="font-danger">{spanText}</em>}
                </Fragment>
              ))}
            </P>
          </div>
        </Col>
      ))}
    </>
  )
}

export default DynamicRightRibbons