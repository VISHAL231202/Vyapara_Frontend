import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { ImagesSizes } from '../../../../utils/Constant'
import { imageData, imagesDetails } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'
import CardHeaderCommon from '../../CardHeaderCommon'

const ImagesSizesCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={ImagesSizes} span={imageData} headClass="pb-0" />
        <CardBody>
          <div className="gradient-border gap-3">
            <Image className="img-30 img-h-30" src={dynamicImage(`avatar/5.jpg`)} alt="img-size" />
            {imagesDetails.map((item, index) => (
              <Image width={item} height={item} className={`img-${item} img-h-${item}`} src={dynamicImage(`avatar/5.jpg`)} alt={`img-size${item}`} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ImagesSizesCart