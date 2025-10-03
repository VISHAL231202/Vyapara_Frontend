import { Card, CardBody, Col } from 'reactstrap'
import { DefaultList } from '../../../../utils/Constant'
import { defaultData, defaultListData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, SVG, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const DefaultLists = () => {
  return (
    <Col lg="4">
      <Card>
        <CardHeaderCommon title={DefaultList} span={defaultData} headClass='pb-0'/>
        <CardBody>
          <UL>
            <LI>
              <SVG iconId='right-3' className='svg-w-18 stroke-light me-1'  /> Logo Design
            </LI>
            {defaultListData.map((item, index) => (
              <LI key={index}>
                <SVG iconId='right-3' className='svg-w-18 stroke-light me-1'  />{item}
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultLists