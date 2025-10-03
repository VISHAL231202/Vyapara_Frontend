import { cardAbsoluteData } from '../../../../Data/BonusUi/CreativeCard/CreativeCard'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H5, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const AbsoluteCard = () => {
  return (
    <>
      {cardAbsoluteData.map(({ className, src, span,title }, index) => (
        <Col xl="6" key={index}>
          <Card className="card-absolute">
            <CardHeader className={className}>
              <H5 className='text-white'>{title}</H5>
            </CardHeader>
            <CardBody>
              <div className="d-flex list-behavior-1 align-items-center">
                <div className="flex-shrink-0">
                  <Image className="tab-img img-fluid" src={dynamicImage(src)} alt="home" />
                </div>
                <div className="flex-grow-1">
                  <P className="mb-xl-0 mb-sm-4">{span}</P>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default AbsoluteCard