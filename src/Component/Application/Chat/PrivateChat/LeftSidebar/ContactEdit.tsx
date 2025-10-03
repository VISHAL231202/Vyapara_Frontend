import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import { DropClassTypes } from "../../../../../Type/Application/Chat/PrivateChat";
import { AddToFavorites, SendMessages, ViewDetails } from "../../../../../utils/Constant";

const ContactEdit = ({dropClass}:DropClassTypes) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className={`contact-edit ${dropClass}`}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="transparent">
          <i className="fa fa-bars dropdown-toggle"></i>
        </DropdownToggle>
        <DropdownMenu end={true}>
          <DropdownItem>{ViewDetails}</DropdownItem>
          <DropdownItem>{SendMessages}</DropdownItem>
          <DropdownItem>{AddToFavorites}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ContactEdit;
