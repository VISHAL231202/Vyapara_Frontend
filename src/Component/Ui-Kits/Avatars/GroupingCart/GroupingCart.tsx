import { Card, CardBody, Col } from 'reactstrap'
import { Grouping } from '../../../../utils/Constant'
import { groupingData } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import GroupingFirst from './GroupingFirst'
import GroupingSecond from './GroupingSecond'
import GroupInThird from './GroupinThird'
import CardHeaderCommon from '../../CardHeaderCommon'

const GroupingCart = () => {
  return (
    <Col xl="5" md="12">
      <Card>
        <CardHeaderCommon title={Grouping} span={groupingData} headClass='pb-0'/>
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <GroupingFirst />
              <GroupingSecond />
              <GroupInThird />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default GroupingCart