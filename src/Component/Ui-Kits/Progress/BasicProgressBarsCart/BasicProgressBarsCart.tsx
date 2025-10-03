import { Card, CardBody, Col, Row } from 'reactstrap'
import { BasicProgressBars } from '../../../../utils/Constant'
import { basicProgressData, basicProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const BasicProgressBarsCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={BasicProgressBars} span={basicProgressData} headClass='pb-0' />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progressbar value="0" />
              {basicProgressList.map(({ color, value, text }, index) => (
                <Progressbar color={color} value={value} key={index}>
                  {text && text}
                </Progressbar>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicProgressBarsCart