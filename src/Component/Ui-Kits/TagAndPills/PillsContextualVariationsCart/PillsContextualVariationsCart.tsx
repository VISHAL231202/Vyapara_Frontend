import { Card, Col } from 'reactstrap'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import { PillsContextualVariations } from '../../../../utils/Constant'
import { badgesContext, pillsData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CardHeaderCommon from '../../CardHeaderCommon'

const PillsContextualVariationsCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={PillsContextualVariations} span={pillsData} headClass='pb-0'/>
        <CommonTagAndPillsCardBody data={badgesContext} pill />
      </Card>
    </Col>
  )
}

export default PillsContextualVariationsCart