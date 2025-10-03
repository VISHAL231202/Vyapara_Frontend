import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { ListsWithCheckboxs } from '../../../../utils/Constant'
import { checkboxDataList, listCheckboxData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { LI, UL } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const ListsWithCheckbox = () => {
  return (
    <Col md="4">
      <Card>
        <CardHeaderCommon title={ListsWithCheckboxs} span={listCheckboxData} headClass='pb-0'/>
        <CardBody className="dark-list">
          <UL>
            <LI>
              <Input className="me-3 checkbox-primary active" type="checkbox" id="firstCheckbox"/>
              <Label check className="font-primary mb-0" for="firstCheckbox">Auto Start</Label>
            </LI>
            {checkboxDataList.map(({ color,text,id }, index) => (
              <LI key={index}>
                <Input className={`me-3 checkbox-${color}`} type="checkbox" id={`firstCheckbox-${id}`} />
                <Label check className={`font-${color} mb-0`} for={`firstCheckbox-${id}`}>{text}</Label>
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ListsWithCheckbox