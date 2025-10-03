import { Card, CardBody, Col } from 'reactstrap'
import { IndividualCarouselItemIntervals } from '../../../../utils/Constant'
import IndividualIntervalBody from './IndividualIntervalBody'
import { itemIntervalData } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const IndividualInterval = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={IndividualCarouselItemIntervals} span={itemIntervalData} headClass='pb-0'/>
        <CardBody>
          <IndividualIntervalBody />
        </CardBody>
      </Card>
    </Col>
  )
}

export default IndividualInterval