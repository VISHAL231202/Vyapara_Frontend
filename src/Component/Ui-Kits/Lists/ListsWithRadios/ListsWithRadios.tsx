import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { ListsWithRadio } from '../../../../utils/Constant'
import { listRadioData, listRadioDataList } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const ListsWithRadios = () => {
  return (
    <Col md="4">
      <Card>
        <CardHeaderCommon title={ListsWithRadio} span={listRadioData} headClass='pb-0' />
        <CardBody>
          <UL>
            <LI>
              <Input className="radio-primary" type="radio" defaultChecked name="radio" id='secondRadio'/>
              <Label check className="mb-0 font-primary" for="secondRadio">Meditations</Label>
            </LI>
            {listRadioDataList.map(({ color, text,id }, index) => (
              <LI key={index}>
                <Input className={`radio-${color}`} type="radio" id={`secondRadio-${id}`} name="radio"/>
                <Label check className={`mb-0 font-${color}`} for={`secondRadio-${id}`}>{text}</Label>
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ListsWithRadios