import { useState } from 'react';
import { Card, Collapse } from 'reactstrap';
import { Btn } from '../../../../../../AbstractElements';
import { AllSkills, SpecificSkills } from '../../../../../../utils/Constant';
import HeaderWithIcon from '../Filter/HeaderWithIcon';
import SkillCheckBox from './SkillCheckBox';

const SkillClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon heading={SpecificSkills} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Collapse isOpen={isOpen}>
        <SkillCheckBox/>            
        <Btn block className='text-center' color='primary'>{AllSkills}</Btn>
      </Collapse>
    </Card>
  );
}

export default SkillClass