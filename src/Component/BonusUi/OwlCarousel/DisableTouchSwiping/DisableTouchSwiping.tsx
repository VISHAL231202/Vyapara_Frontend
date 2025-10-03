import { Card, CardBody, Col } from 'reactstrap'
import { DisableTouchSwipings } from '../../../../utils/Constant'
import CommonCarousel from '../Common/CommonCarousel'
import { disableTouchData, disableTouchDataList } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const DisableTouchSwiping = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={DisableTouchSwipings} span={disableTouchData} headClass='pb-0' />
        <CardBody>
          <CommonCarousel data={disableTouchDataList} control/>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DisableTouchSwiping