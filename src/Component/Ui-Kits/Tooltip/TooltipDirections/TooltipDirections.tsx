import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { DirectionsTooltip, TooltipOnTop } from '../../../../utils/Constant';
import CommonTooltip from '../Common/CommonTooltip';
import { directionTooltipData, directionTooltipList } from '../../../../Data/Ui-Kits/Tooltip/Tooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon';

const TooltipDirections = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={DirectionsTooltip} span={directionTooltipData} headClass='pb-0' />
        <CardBody>
          <div className="common-flex">
            <Btn color="primary" id="Tooltip-8" className="mb-0 me-0 rounded-pill">{TooltipOnTop}</Btn>
            <ToolTip placement="top" isOpen={tooltip} target="Tooltip-8" toggle={toggle}>Tooltip on top</ToolTip>
            {directionTooltipList.map((item) => (
              <CommonTooltip key={item.id} item={item} pill={true} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default TooltipDirections