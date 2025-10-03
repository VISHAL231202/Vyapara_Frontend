import { Card, CardBody, Col, Row } from 'reactstrap'
import { CustomHeightProgressBars } from '../../../../utils/Constant'
import { heightProgressData, heightProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const CustomHeightProgressBarsCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={CustomHeightProgressBars} span={heightProgressData} headClass='pb-0' />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progressbar color="primary" value="25" style={{ height: "2px" }} />
              {heightProgressList.map(({ color, value, height }, index) => (
                <Progressbar color={color} value={value} style={{ height: `${height}` }} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomHeightProgressBarsCart