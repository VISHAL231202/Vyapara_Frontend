import { Card, Col } from 'reactstrap'
import { NumberOfBadge } from '../../../../utils/Constant'
import { numberContext, numberData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import CardHeaderCommon from '../../CardHeaderCommon'

const NumberOfBadgeCard = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={NumberOfBadge} span={numberData} headClass='pb-0' />
        <CommonTagAndPillsCardBody number={numberContext} />
      </Card>
    </Col>
  )
}

export default NumberOfBadgeCard