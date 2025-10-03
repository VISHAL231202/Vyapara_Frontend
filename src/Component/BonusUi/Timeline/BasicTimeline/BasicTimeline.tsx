import { Card, CardBody, Col } from 'reactstrap'
import { BasicTimelines } from '../../../../utils/Constant'
import { basicTimeLineData } from '../../../../Data/BonusUi/Timeline/Timeline'
import StaticBasicTimeline from './StaticBasicTimeline'
import DynamicBasicTimeline from './DynamicBasicTimeline'
import { UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const BasicTimeline = () => {
  return (
    <Col xl="6" className="box-col-6 notification main-timeline">
      <Card>
        <CardHeaderCommon title={BasicTimelines} span={basicTimeLineData} headClass='pb-0' />
        <CardBody className="dark-timeline">
          <UL className='simple-list'>
            <StaticBasicTimeline />
            <DynamicBasicTimeline />
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicTimeline
