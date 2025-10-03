import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { BasicDropdowns, Dashboard } from '../../../../utils/Constant';
import { dropDownData, dropDownList } from '../../../../Data/Ui-Kits/Dropdown/Dropdown';
import CommonDropDown from '../Common/CommonDropDown';
import CardHeaderCommon from '../../CardHeaderCommon';

const BasicDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={BasicDropdowns} span={dropDownData} headClass='pb-0'/>
        <CardBody>
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="primary">{Dashboard}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem>Project</DropdownItem>
                  <DropdownItem>Ecommerce</DropdownItem>
                  <DropdownItem>Crypto</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {dropDownList.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicDropdown