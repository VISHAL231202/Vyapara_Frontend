import { Card, Col } from 'reactstrap'
import { NumberOfPillsTags } from '../../../../utils/Constant'
import { roundedContext, roundedData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import CardHeaderCommon from '../../CardHeaderCommon'

const NumberOfPillsTagCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={NumberOfPillsTags} span={roundedData} headClass='pb-0' />
        <CommonTagAndPillsCardBody data={roundedContext} />
      </Card>
    </Col>
  )
}

export default NumberOfPillsTagCart