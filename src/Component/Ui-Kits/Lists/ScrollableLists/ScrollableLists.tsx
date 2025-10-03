import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Href, MollyBoake, ScrollableList } from '../../../../utils/Constant'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { scrollableData } from '../../../../Data/Ui-Kits/Lists/Lists'
import DynamicScrollableLists from './DynamicScrollableLists'
import CardHeaderCommon from '../../CardHeaderCommon'

const ScrollableLists = () => {
  return (
    <Col xxl="4" xl="12">
      <Card>
        <CardHeaderCommon title={ScrollableList} span={scrollableData} headClass='pb-0'/>
        <CardBody>
          <ListGroup className="main-lists-content scrollbar-wrapper">
            <ListGroupItem className="list-group-item-action active list-hover-secondary border-secondary" href={Href}>
              <div className="list-wrapper gap-0">
                <Image className="b-r-8" src={dynamicImage(`avatar/9.jpg`)} alt="profile" />
                <div className="list-content">
                  <H6>{MollyBoake}</H6>
                  <P>MollyBoake@rhyta.com</P>
                  <small>5 days ago</small>
                </div>
              </div>
            </ListGroupItem>
            <DynamicScrollableLists />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ScrollableLists