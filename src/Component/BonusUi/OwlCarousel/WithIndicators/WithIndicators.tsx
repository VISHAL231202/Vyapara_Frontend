import { Card, CardBody, Col } from 'reactstrap'
import { WithIndicator } from '../../../../utils/Constant'
import CommonCarousel from '../Common/CommonCarousel'
import { withIndicatorData, withIndicatorDataList } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const WithIndicators = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={WithIndicator} span={withIndicatorData} headClass='pb-0' />
        <CardBody>
          <CommonCarousel data={withIndicatorDataList} control indecators />
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIndicators