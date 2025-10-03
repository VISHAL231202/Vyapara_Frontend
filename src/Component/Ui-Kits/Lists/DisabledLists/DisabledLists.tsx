import { Card, CardBody, Col } from 'reactstrap'
import { DisabledList, Href } from '../../../../utils/Constant'
import { Image, LI, UL } from '../../../../AbstractElements'
import { disableList, disableListData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { dynamicImage } from '../../../../Service'
import CardHeaderCommon from '../../CardHeaderCommon'

const DisabledLists = () => {
  return (
    <Col xxl="4" lg="6">
      <Card>
        <CardHeaderCommon title={DisabledList} span={disableListData} headClass='pb-0'/>
        <CardBody>
          <UL>
            <LI className="list-group-item-action list-hover-primary active" href={Href}>
              <Image className="rounded-circle img-40" src={dynamicImage(`avatar/1.jpg`)} alt="user" />Teresa J. Mosteller
            </LI>
            {disableList.map(({ text, className,src }, index) => (
              <LI className={`list-group-item-action ${className ? className : ""}`} key={index} href={Href}>
                <Image className="rounded-circle img-40" src={dynamicImage(src)} alt="user" />{text}
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DisabledLists