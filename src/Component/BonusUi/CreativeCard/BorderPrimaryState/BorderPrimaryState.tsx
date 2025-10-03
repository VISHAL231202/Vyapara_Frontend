import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { BryanOwens, GloriaAcheson, Href, PrimaryBorderState, TeresaMosteller } from '../../../../utils/Constant'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { borderPrimaryData } from '../../../../Data/BonusUi/CreativeCard/CreativeCard'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const BorderPrimaryState = () => {
  return (
    <Col xl="4">
      <Card>
        <CardHeaderCommon headClass="b-l-primary b-w-3" title={PrimaryBorderState} span={borderPrimaryData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem className="list-group-item-action active" href={Href}>
              <Image className="rounded-circle" src={dynamicImage(`avatar/1.jpg`)} alt="user" />{TeresaMosteller}
            </ListGroupItem>
            <ListGroupItem className="list-group-item-action" href={Href}>
              <Image className="rounded-circle" src={dynamicImage(`avatar/3.jpg`)} alt="user" />{GloriaAcheson}
            </ListGroupItem>
            <ListGroupItem className="list-group-item-action" href={Href}>
              <Image className="rounded-circle" src={dynamicImage(`avatar/5.jpg`)} alt="user" />{BryanOwens}
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BorderPrimaryState