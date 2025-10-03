import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Modal } from 'reactstrap'
import { H4, H5, Image, LI, UL } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon'
import { profileData } from '../../../../../Data/Ui-Kits/Modal/Modal'
import { dynamicImage } from '../../../../../Service'
import { ProfileModalType } from '../../../../../Type/Ui-Kits/UiKitsTypes'

const ProfileModal:React.FC<ProfileModalType> = ({ modalOne, modalOneToggle }) => {
  return (
    <Modal fade centered isOpen={modalOne} toggle={modalOneToggle}>
      <div className="modal-dialog m-0">
        <div className="modal-content">
          <Col xl="12">
            <Card className="social-profile mb-0">
              <CardBody>
                <div className="social-img-wrap">
                  <div className="social-img">
                    <Image src={dynamicImage(`avatar/1.jpg`)} alt="profile" />
                  </div>
                  <div className="edit-icon">
                    <SvgIcon className='feather stroke-primary' iconId="check-circle" />
                  </div>
                </div>
                <div className="social-details">
                  <H5 className="mb-1">
                    <Link to="/app/social-app">Brooklyn Simmons</Link>
                  </H5>
                  <span className="font-light">@brookly.simmons</span>
                  <UL className="social-follow simple-list flex-row">
                    <LI>
                      <H4 className="mb-0">1,908</H4>
                      <span className="font-light">Posts</span>
                    </LI>
                    {profileData.map(({ heading, data }, index) => (
                      <LI key={index}>
                        <H4 className="mb-0">{heading}</H4>
                        <span className="font-light">{data}</span>
                      </LI>
                    ))}
                  </UL>
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    </Modal>
  )
}

export default ProfileModal