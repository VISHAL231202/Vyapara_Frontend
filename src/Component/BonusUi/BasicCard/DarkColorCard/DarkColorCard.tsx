import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import { DarkColorCards, FooterCard, SmartHeadphones } from '../../../../utils/Constant'
import { H6, Image, P } from '../../../../AbstractElements'
import { darkColorData } from '../../../../Data/BonusUi/BasicCard/BasicCard'
import { dynamicImage } from '../../../../Service'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const DarkColorCard = () => {
  const DarkColorText1 = " — also called smart earbuds or hearable — are high-tech in-ear devices that do more than transmit audio. These headphones are usually wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you to complete common tasks without directly accessing your phone or computer. Smart wireless headphones sync up to other devices using Bluetooth technology, and many of their features rely on data from your smartphone or computer.";
  return (
    <Col sm="12">
      <Card className='dark-color-card'>
        <CardHeaderCommon title={DarkColorCards} span={darkColorData} headClass="bg-dark border-bottom"/>
        <CardBody className="bg-dark">
          <div className="d-flex align-items-center gap-3 pills-blogger">
            <div className="blog-wrapper">
              <Image className="blog-img img-100" src={dynamicImage(`dashboard2/product/headphones.png`)} alt="head-phone" />
            </div>
            <div className="blog-content">
              <P><em className="font-danger fw-bold">{SmartHeadphones}</em>{DarkColorText1}</P>
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-dark border-top">
          <H6 className="mb-0">{FooterCard}</H6>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default DarkColorCard