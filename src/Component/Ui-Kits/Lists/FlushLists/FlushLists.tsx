import { Card, CardBody, Col } from 'reactstrap'
import { FlushList } from '../../../../utils/Constant'
import { flushData, flushListData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, SVG, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const FlushLists = () => {
  return (
    <Col lg="4">
      <Card>
        <CardHeaderCommon title={FlushList} span={flushData} headClass='pb-0'/>
        <CardBody>
          <UL className="list-group-flush">
            <LI>
              <SVG className="svg-w-18 stroke-light me-1" iconId="right-3" /> PRODUCT
            </LI>
            {flushListData.map((item, index) => (
              <LI key={index}>
                <SVG className="svg-w-18 stroke-light me-1" iconId="right-3" /> {item}
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FlushLists