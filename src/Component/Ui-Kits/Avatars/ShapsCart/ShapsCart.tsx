import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { shape, shapeData } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import { Shapes } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import CardHeaderCommon from '../../CardHeaderCommon'

const ShapeCart = () => {
  return (
    <Col xl="4" md="12">
      <Card>
        <CardHeaderCommon title={Shapes} span={shapeData} headClass='pb-0' />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <div className="avatar">
                <Image className="img-100 b-r-8" src={dynamicImage(`avatar/4.jpg`)} alt="image" />
              </div>
              {shape.map(({ className, src }, index) => (
                <div className="avatar" key={index}>
                  <Image className={`${className} b-r-30`} src={dynamicImage(`avatar/${src}`)} alt="image" />
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ShapeCart