import { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap';
import { ButtonWithDataBsTarget, CollapseAccordions, LinkWithHref } from '../../../../utils/Constant';
import { Btn, P } from '../../../../AbstractElements';
import { accordionCollapse } from '../../../../Data/Ui-Kits/Accordion/Accordion';
import CardHeaderCommon from '../../CardHeaderCommon';

const CollapseAccordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Col xxl="6" xl="7">
      <Card>
        <CardHeaderCommon title={CollapseAccordions} span={accordionCollapse} headClass='pb-0'/>
        <CardBody>
          <P className="mb-2 common-flex">
            <Btn color="info" onClick={toggle}>{LinkWithHref}</Btn>
            <Btn color="info" onClick={toggle}>{ButtonWithDataBsTarget}</Btn>
          </P>
          <Collapse isOpen={isOpen}>
            <Card className="default-border mb-0">
              <CardBody>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CollapseAccordion