import { useState } from "react";
import { Card, Collapse, Row } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { ToggleFirstElement } from "../../../../utils/Constant";

const NestedCustom = () => {
  const [openFirst, setOpenFirst] = useState<boolean>(false);
  const toggleFirst = () => setOpenFirst(!openFirst);
  return (
    <>
      <div className="common-flex">
        <Btn color="tertiary" onClick={toggleFirst}>
          {ToggleFirstElement}
        </Btn>
      </div>
      <Row className="d-flex">
        <Collapse isOpen={openFirst} className="multi-collapse dark-accordion">
          <Card color="" className="card-body default-border mb-0 mt-2">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </Card>
        </Collapse>
      </Row>
    </>
  );
};

export default NestedCustom;
