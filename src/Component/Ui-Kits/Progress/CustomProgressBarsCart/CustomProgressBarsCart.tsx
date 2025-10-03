import { Card, CardBody, Col, Row } from 'reactstrap'
import { CustomProgressBars, GettingStarted } from '../../../../utils/Constant'
import { Fragment } from 'react'
import { H5, Progressbar } from '../../../../AbstractElements'
import { customProgressData, customProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import CardHeaderCommon from '../../CardHeaderCommon'

const CustomProgressBarsCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={CustomProgressBars} span={customProgressData} headClass='pb-0' />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <H5 className="mb-2 f-w-500">{GettingStarted}</H5>
              <Progressbar color="dark" value="0" className="text-center mb-4"></Progressbar>
              {customProgressList.map(({ color, value, title, text }, index) => (
                <Fragment key={index}>
                  <H5 className="mb-2 f-w-500">{title}</H5>
                  <Progressbar color={color} striped animated value={value} className="mb-4">
                    {text}
                  </Progressbar>
                </Fragment>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomProgressBarsCart