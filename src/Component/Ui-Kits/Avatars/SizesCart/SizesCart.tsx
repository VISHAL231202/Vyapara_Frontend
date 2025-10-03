import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Sizes } from '../../../../utils/Constant'
import { sizeData, sizeImages } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import CardHeaderCommon from '../../CardHeaderCommon'

const SizesCart = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CardHeaderCommon title={Sizes} span={sizeData} headClass='pb-0' />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <div className="avatar">
                <Image className="img-100 rounded-circle" src={dynamicImage(`avatar/1.jpg`)} alt="image" />
              </div>
              {sizeImages.map((item, index) => (
                <div className="avatar" key={index}>
                  <Image className={`${item.className} rounded-circle`} src={dynamicImage(`avatar/${item.src}`)} alt="image" />
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SizesCart