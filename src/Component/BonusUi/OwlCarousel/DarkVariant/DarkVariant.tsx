import { Card, CardBody, Col } from 'reactstrap'
import { DarkVariants } from '../../../../utils/Constant'
import CommonCarousel from '../Common/CommonCarousel'
import { darkVariantData, darkVariantDataList } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const DarkVariant = () => {
  return (
    <Col xl="6" sm="12">
      <Card>
        <CardHeaderCommon title={DarkVariants} span={darkVariantData} headClass='pb-0' />
        <CardBody>
          <CommonCarousel dark data={darkVariantDataList} control caption lightCaption indecators />
        </CardBody>
      </Card>
    </Col>
  )
}

export default DarkVariant