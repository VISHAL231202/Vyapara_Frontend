import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Col } from 'reactstrap'
import { H4, H5, H6, P } from '../../../../AbstractElements'
import { CommonCardProp } from '../../../../Type/BonusUi/BonusUiTypes'
import { EdminTheme } from '../../../../utils/Constant'

const CommonCard:React.FC<CommonCardProp>= ({ data }) => {
  return (
    <>
      <Col xl="4">
        <Card>
          <CardHeader className={data.headerClass}>
            <H4 className={data.headingClass}>{data.title}</H4>
          </CardHeader>
          <CardBody className={data.bodyClass}>
            <H5 className="pb-2">{data.text}</H5>
            <P className="mb-0">{data.span}</P>
          </CardBody>
          <CardFooter className={data.footerClass}>
            <H6 className="mb-0 text-end">{EdminTheme}</H6>
          </CardFooter>
        </Card>
      </Col>
    </>
  )
}

export default CommonCard