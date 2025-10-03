import { Card, Col, Row } from 'reactstrap'
import CommonProfileHead from '../Common/CommonProfileHead'
import { Link } from 'react-router-dom'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Href } from '../../../../../utils/Constant'
import CommonProfileLike from '../Common/CommonProfileLike'

const DetailImage = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonProfileHead  activeTime="2 Yours ago" image='4'/>
          <hr />
          <Row>
            <Col lg="12" xl="4">
              <div className="step8 mb-4">
                <Link to={Href}>
                  <Image className="img-fluid rounded" src={dynamicImage("other-images/sidebar-bg.jpg")} alt="nature" />
                </Link>
              </div>
              <CommonProfileLike likeNumber={1989} commentsNumber={569} />
            </Col>
            <Col xl="6">
              <P>{"Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable."}</P>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  )
}

export default DetailImage