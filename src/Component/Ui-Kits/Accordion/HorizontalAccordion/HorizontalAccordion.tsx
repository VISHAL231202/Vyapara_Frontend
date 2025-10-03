import { useState } from 'react'
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap';
import { HorizontalAccordions, ToggleWidthCollapse } from '../../../../utils/Constant';
import { accordionHorizontal } from '../../../../Data/Ui-Kits/Accordion/Accordion';
import { Btn, P } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon';

const HorizontalAccordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Col xxl="6" xl="5">
      <Card>
        <CardHeaderCommon title={HorizontalAccordions} span={accordionHorizontal} headClass='pb-0' />
        <CardBody>
          <P className="mb-2">
            <Btn color="success" onClick={toggle}>{ToggleWidthCollapse}</Btn>
          </P>
          <Row>
            <Collapse isOpen={isOpen} horizontal className="mt-3">
              <Card className="accordion-h-space mb-0 default-border">
                <CardBody>This is some placeholder content for a horizontal collapse. It&apos;s hidden by default and shown when triggered.</CardBody>
              </Card>
            </Collapse>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default HorizontalAccordion