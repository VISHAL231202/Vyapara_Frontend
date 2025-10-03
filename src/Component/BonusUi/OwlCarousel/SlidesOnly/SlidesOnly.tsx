import { Card, CardBody, Col } from 'reactstrap'
import { DefaultSwiperSlider } from '../../../../utils/Constant'
import CommonCarousel from '../Common/CommonCarousel'
import { sliesOnlyData, sliesOnlyDataList } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const SlidesOnly = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={DefaultSwiperSlider} span={sliesOnlyData} headClass='pb-0' />
        <CardBody>
          <CommonCarousel data={sliesOnlyDataList} interval="2000"  />
        </CardBody>
      </Card>
    </Col>
  )
}

export default SlidesOnly