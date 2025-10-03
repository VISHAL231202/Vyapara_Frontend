import { Card, Col } from 'reactstrap'
import { BadgeTagsWithIcons } from '../../../../utils/Constant'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import { iconContext, iconData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CardHeaderCommon from '../../CardHeaderCommon'

const BadgeTagsWithIconsCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={BadgeTagsWithIcons} span={iconData} headClass='pb-0' />
        <CommonTagAndPillsCardBody number={iconContext} />
      </Card>
    </Col>
  )
}

export default BadgeTagsWithIconsCart