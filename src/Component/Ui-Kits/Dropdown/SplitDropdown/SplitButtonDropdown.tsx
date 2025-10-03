import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Dropdown, DropdownToggle } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { SplitButtonDropdownProp } from '../../../../Type/Ui-Kits/UiKitsTypes';
import { Href } from '../../../../utils/Constant';

const SplitButtonDropdown:React.FC<SplitButtonDropdownProp> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <ButtonGroup>
      <Btn outline color={item.btnColor}>{item.btnText}</Btn>
      <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
        <DropdownToggle color={item.btnColor}>
          <i className="icofont icofont-arrow-down"></i>
        </DropdownToggle>
        <div className="dropdown-content">
          <Link to={Href}>{item.items1}</Link>
          <Link to={Href}>{item.items2}</Link>
        </div>
      </Dropdown>
    </ButtonGroup>
  )
}

export default SplitButtonDropdown