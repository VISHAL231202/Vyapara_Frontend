import { Card, CardBody, Col, Row } from 'reactstrap'
import { SmallProgressBars } from '../../../../utils/Constant'
import { smallProgressData, smallProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const SmallProgressBarsCart = () => {
  return (
    <Col lg="6">
      <Card className="height_equal">
        <CardHeaderCommon title={SmallProgressBars} span={smallProgressData} headClass='pb-0'/>
        <CardBody className="progress-showcase progress-b-space">
          <Row>
            <Col>
              <Progressbar color="primary" animated bar value="30" max={100} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4">
                <span className="font-primary progress-label">30 MB Data</span>
                <span className="animate-circle"></span>
              </Progressbar>
              {smallProgressList.map(({ value, title }, index) => (
                <Progressbar color="primary" animated striped bar value={value} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4" key={index}>
                  <span className="font-primary progress-label">{title}</span>
                  <span className="animate-circle"></span>
                </Progressbar>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SmallProgressBarsCart