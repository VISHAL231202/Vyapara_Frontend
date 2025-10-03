import { Card, CardBody, Col } from 'reactstrap'
import { P } from '../../../../AbstractElements'
import { FlatCards } from '../../../../utils/Constant'
import { flatCardData } from '../../../../Data/BonusUi/BasicCard/BasicCard'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const FlatCard = () => {
  const FlatCardText1 = "A navigation bar is a particularly important feature because it allows visitors to quickly and easily find";
  const FlatCardTextEm = " important pages on your website";
  const FlatCardText2 = " , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.";
  
  return (
    <Col xl="6">
      <Card className="b-r-15">
        <CardHeaderCommon title={FlatCards} span={flatCardData} headClass='pb-0 b-r-15'/>
        <CardBody>
          <P className="mb-0">
            {FlatCardText1}<em className="font-danger">{FlatCardTextEm}</em>{FlatCardText2}
          </P>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FlatCard