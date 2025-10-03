import { useState } from 'react';
import { Card, Collapse } from 'reactstrap';
import { Btn } from '../../../../../../AbstractElements';
import { AllIndustries, IndustryHeading } from '../../../../../../utils/Constant';
import HeaderWithIcon from '../Filter/HeaderWithIcon';
import IndustryCheckBox from './IndustryCheckBox';

const Industry = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Card>
      <HeaderWithIcon heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Collapse isOpen={isOpen}>
        <IndustryCheckBox/>
        <Btn block className='w-100 text-center' color='primary'>{AllIndustries}</Btn>
      </Collapse>
    </Card>
  );
}

export default Industry