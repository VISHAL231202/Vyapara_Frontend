import { Card, CardBody, Col } from 'reactstrap'
import { tourProfileData, userCardData } from '../../../../Data/Application/SocialApp/SocialApp'
import { H4, H5, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'
import { Followers, Following, Href, Posts } from '../../../../utils/Constant'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'

const FriendsCard = () => {
  return (
    <>
      {userCardData.map((item) => (
        <Col sm="6" xxl="3" xl="4" className="col-ed-4 box-col-4" key={item.id}>
          <Card className="social-profile">
            <CardBody>
              <div className="social-img-wrap">
                <div className="social-img">
                  <Image src={dynamicImage(item.avatar)} alt="user"/>
                </div>
                <div className="edit-icon">
                  <SvgIcon iconId={item.icon} className='feather stroke-primary'/>
                </div>
              </div>
              <div className="social-details">
                <H4 className="mb-1">
                  <Link className='f-20' to={Href}>{item.name}</Link>
                </H4>
                <span className="font-light">{item.email}</span>
                <UL className="card-social simple-list flex-row">
                  { tourProfileData.map((item, index) => (
                    <LI className="list-inline-item" key={index}>
                      <Link to={item.link} target="_blank" rel="noreferrer">
                        <i className={`${item.icon} font-primary`} />
                      </Link>
                    </LI>
                  ))}
                </UL>
                <UL className="social-follow simple-list flex-row d-block">
                  <LI className='p-0'>
                    <H5 className="mb-0">{item.totalPost}</H5>
                    <span className="font-light">{Posts}</span>
                  </LI>
                  <LI className='p-0'>
                    <H5 className="mb-0">{item.follower}</H5>
                    <span className="font-light">{Followers}</span>
                  </LI>
                  <LI className='p-0'>
                    <H5 className="mb-0">{item.following}</H5>
                    <span className="font-light">{Following}</span>
                  </LI>
                </UL>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default FriendsCard