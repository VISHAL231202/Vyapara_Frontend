import { Card, CardBody, Col, Row } from 'reactstrap'
import { ProgressBarsAnimated } from '../../../../utils/Constant'
import { animatedData, animatedList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const ProgressBarsAnimatedCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={ProgressBarsAnimated} span={animatedData} headClass='pb-0' />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progressbar color="primary" striped animated value="10" />
              {animatedList.map(({ color, value }, index) => (
                <Progressbar color={color} striped animated value={value} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProgressBarsAnimatedCart