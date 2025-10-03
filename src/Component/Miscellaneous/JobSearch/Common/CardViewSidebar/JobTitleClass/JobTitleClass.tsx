import { useState } from "react";
import { Card, Collapse } from "reactstrap";
import { Btn } from "../../../../../../AbstractElements";
import { AllJobTitle, JobHeading } from "../../../../../../utils/Constant";
import HeaderWithIcon from "../Filter/HeaderWithIcon";
import JobTitleCheckBox from "./JobTitleCheckBox";

const JobTitleClass = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Card>
      <HeaderWithIcon
        heading={JobHeading}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Collapse isOpen={isOpen}>
        <JobTitleCheckBox />
        <Btn block className="text-center" color="primary">
          {AllJobTitle}
        </Btn>
      </Collapse>
    </Card>
  );
};

export default JobTitleClass;
