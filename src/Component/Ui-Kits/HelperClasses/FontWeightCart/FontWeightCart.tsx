import { Card, CardBody, Col } from 'reactstrap'
import { fontWeightData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'
import { FontWeight } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon'
import { H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements'

const FontWeightCart = () => {
  return (
    <Col xl="7">
      <Card>
        <CardHeaderCommon title={FontWeight} span={fontWeightData} headClass='pb-0' />
        <CardBody className='d-flex flex-column gap-3'>
          <H1 className="f-w-700">You can set light font weight heading .f-w-700</H1>
          <H2 className="f-w-600">You can set bold font weight Heading 2 using<code> f-w-600</code></H2>
          <H3 className="f-w-500">You can set medium font weight Heading 3 using<code> f-w-500</code></H3>
          <H4 className="f-w-400">You can set normal font weight Heading 4 using<code> f-w-400</code></H4>
          <H5 className="f-w-300">You can set light font weight Heading 5 using<code> f-w-300</code></H5>
          <H6 className="f-w-100">You can set light font weight Heading 6 using<code> f-w-100</code></H6>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FontWeightCart