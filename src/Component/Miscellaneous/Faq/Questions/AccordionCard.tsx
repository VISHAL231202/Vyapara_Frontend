import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { ChevronDown, ChevronUp } from 'react-feather';
import { AccordionCardPropsType } from '../../../../Type/Miscellaneous/Faq/Faq';
import { FaRegQuestionCircle } from 'react-icons/fa';

const AccordionCard: React.FC<AccordionCardPropsType> = ({ item }) => {
    const [isActivity, setIsActivity] = useState(false);
    const handelChange = () => setIsActivity(!isActivity);
  
    return (
      <Card className="shadow-none">
        <CardHeader>
          <H5 className="mb-0">
            <Btn tag="a" color="transparent" className="btn-link collapsed ps-0 justify-content-between" onClick={handelChange}>
              <span className="d-flex align-items-center gap-2">
                <FaRegQuestionCircle className="fa-regular"></FaRegQuestionCircle>
                {item.title}
              </span>
              {isActivity ? <ChevronUp className="position-relative inset-0" /> : <ChevronDown className="position-relative inset-0" />}
            </Btn>
          </H5>
        </CardHeader>
        <Collapse isOpen={isActivity}>
          <CardBody>{item.paragraph}</CardBody>
        </Collapse>
      </Card>
    );
}

export default AccordionCard