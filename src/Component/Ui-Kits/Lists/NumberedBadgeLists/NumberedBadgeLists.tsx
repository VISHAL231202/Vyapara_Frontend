import { Card, CardBody, Col} from 'reactstrap'
import { NumberedBadgeList } from '../../../../utils/Constant'
import { numberBadgeData, numberBadgeDataList } from '../../../../Data/Ui-Kits/Lists/Lists'
import { Badges, LI, OL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const NumberedBadgeLists = () => {
  return (
    <Col xxl="4" lg="6">
      <Card>
        <CardHeaderCommon title={NumberedBadgeList} span={numberBadgeData} headClass='pb-0' />
        <CardBody>
          <OL className="list-group list-group-numbered badge-list">
            <LI className="d-flex justify-content-between align-items-start flex-wrap">
              <div>Stella Nowland</div>
              <Badges color="warning" pill className="p-2">Freelance</Badges>
            </LI>
            {numberBadgeDataList.map(({ title, color, text }, index) => (
              <LI className="d-flex justify-content-between align-items-start flex-wrap" key={index}>
                <div>{title}</div>
                <Badges color={color} pill className="p-2">{text}</Badges>
              </LI>
            ))}
          </OL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default NumberedBadgeLists