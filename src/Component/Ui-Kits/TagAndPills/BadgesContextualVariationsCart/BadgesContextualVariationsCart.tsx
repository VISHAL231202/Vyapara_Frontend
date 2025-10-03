import { Card, Col } from 'reactstrap'
import { badgesContext, badgeData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import { BadgesContextualVariations } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon'

const BadgesContextualVariationsCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={BadgesContextualVariations} span={badgeData} headClass='pb-0' />
        <CommonTagAndPillsCardBody data={badgesContext} />
      </Card>
    </Col>
  )
}

export default BadgesContextualVariationsCart