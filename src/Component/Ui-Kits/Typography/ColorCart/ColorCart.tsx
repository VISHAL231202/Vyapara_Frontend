import { Card, Col } from 'reactstrap'
import { ColoredHeadings } from '../../../../utils/Constant'
import { headingData } from '../../../../Data/Ui-Kits/Typography/Typography'
import ColorHeadingBody from './ColorHeadingBody'
import CardHeaderCommon from '../../CardHeaderCommon'

const ColorHeading = () => {
  return (
    <Col xxl="4" xl="12">
      <Card className="height-equal">
        <CardHeaderCommon title={ColoredHeadings} span={headingData} headClass='pb-0' />
        <ColorHeadingBody />
      </Card>
    </Col>
  )
}

export default ColorHeading