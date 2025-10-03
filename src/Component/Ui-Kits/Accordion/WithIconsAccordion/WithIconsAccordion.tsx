//@ts-nocheck
import { Card, CardBody, Col, UncontrolledAccordion } from 'reactstrap'
import { WithIconsAccordions } from '../../../../utils/Constant'
import CommonAccordionItem from '../Common/CommonAccordionItem'
import { accordionIconData, accordionIconList } from '../../../../Data/Ui-Kits/Accordion/Accordion'
import StaticAccordion from './StaticAccordion'
import CardHeaderCommon from '../../CardHeaderCommon'

const WithIconsAccordion = () => {
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={WithIconsAccordions} span={accordionIconData} headClass='pb-0' />
        <CardBody className="accordion-border icons-accordion">
          <UncontrolledAccordion stayOpen>
            <StaticAccordion />
            {accordionIconList.map((data, index) => (
              <CommonAccordionItem key={index} item={data} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIconsAccordion