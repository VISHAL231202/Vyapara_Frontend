import { Card, Col } from 'reactstrap'
import { Headings } from '../../../../utils/Constant'
import { headingData } from '../../../../Data/Ui-Kits/Typography/Typography'
import HeadingsBody from './HeadingsBody'
import CardHeaderCommon from '../../CardHeaderCommon'

const HeadingCart = () => {
  return (
    <Col xxl="8" xl="12">
      <Card className="height-equal">
        <CardHeaderCommon title={Headings} span={headingData} headClass='pb-0' />
        <HeadingsBody />
      </Card>
    </Col>
  )
}

export default HeadingCart