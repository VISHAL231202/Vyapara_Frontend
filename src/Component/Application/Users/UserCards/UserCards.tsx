import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { H4, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'
import { Users, UsersCards } from '../../../../utils/Constant'
import { userCardData } from '../../../../Data/Application/Users/UserCards/UserCards'
import SocialMediaIcons from './SocialMediaIcons'
import UserCardsFooter from './UserCardsFooter'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'

const UserCardsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={UsersCards} parent={Users} />
      <Container fluid className='user-profile'>
        <Row>
          {userCardData.map((item) => (
            <Col xl="4" sm="6" xxl="3" className="col-ed-4 box-col-4" key={item.id}>
              <Card className="social-profile">
                <CardBody>
                  <div className="social-img-wrap">
                    <div className="social-img">
                      <Image src={dynamicImage(item.avatar)} className="img-fluid" alt="user"/>
                    </div>
                    <div className="edit-icon">
                      <SvgIcon iconId="check-circle" className='feather stroke-primary' />
                    </div>
                  </div>
                  <div className="social-details">
                    <H4 className="mb-1">
                      <Link className='f-20' to={`${process.env.PUBLIC_URL}/app/socialapp`}>{item.name}</Link>
                    </H4>
                    <span className="font-light">{item.email}</span>
                    <SocialMediaIcons listClassName="card-social" />
                    <UserCardsFooter item={item} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default UserCardsContainer