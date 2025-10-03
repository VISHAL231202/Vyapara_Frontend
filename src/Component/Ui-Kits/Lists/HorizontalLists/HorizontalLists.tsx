import { Card, CardBody, Col } from 'reactstrap'
import { HorizontalList } from '../../../../utils/Constant'
import { horizontalData, horizontalDataList, horizontalListData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const HorizontalLists = () => {
  return (
    <Col xxl="6">
      <Card>
        <CardHeaderCommon title={HorizontalList} span={horizontalData} headClass='pb-0' />
        <CardBody>
          <div className="horizontal-list-wrapper dark-list">
            <UL className="fw-bold list-group-horizontal-sm pb-2">
              <LI className="b-l-primary">Product</LI>
              {horizontalDataList.map((item, index) => (
                <LI key={index}>{item}</LI>
              ))}
            </UL>
            {horizontalListData.map(({ item, color }, index) => (
              <UL className="fw-bold list-group-horizontal-sm pb-2" key={index}>
                {item.map((data, index) => (
                  <LI className={`${index === 0 ? `b-l-${color}` : ""}`} key={index}>{data}</LI>
                ))}
              </UL>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default HorizontalLists