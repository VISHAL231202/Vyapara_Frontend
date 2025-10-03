import { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap';
import HeaderWithIcon from '../LeftSideBar/HeaderWithIcon';
import { Friends } from '../../../../../utils/Constant';
import { friendsImageName } from '../../../../../Data/Application/SocialApp/SocialApp';
import { Image, LI, UL } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';

const FriendsCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12" className="xl-50 box-col-6">
      <Card>
        <HeaderWithIcon Heading={Friends} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="avatar-showcase filter-cards-view friend-list">
            <UL>
              {friendsImageName.map((data, index) => (
                <LI className="friend-pic" key={index}>
                  <Image className="img-50 rounded-circle" src={dynamicImage(`avatar/${data}`)} alt="images" />
                </LI>
              ))}
            </UL>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
}

export default FriendsCard