import { Card, CardBody, Col } from 'reactstrap'
import { P } from '../../../../AbstractElements'
import { FontStyle } from '../../../../utils/Constant'
import { fontData, fontStyleDetail } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'
import CardHeaderCommon from '../../CardHeaderCommon'

const FontStyleCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={FontStyle} span={fontData} headClass="pb-0" />
        <CardBody className='height_equal'>
          <P className="f-s-normal">This is a <strong>.f-s-normal</strong> font-style</P>
          {fontStyleDetail.map((item, index) => (
            <P className={item} key={index}>This is a <strong>{item}</strong> font-style</P>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default FontStyleCart