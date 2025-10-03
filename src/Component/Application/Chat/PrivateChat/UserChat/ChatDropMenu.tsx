import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import SvgIcon from "../../../../../CommonElements/SVG/SvgIcon";

const ChatDropMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="dropdown-form">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
        <DropdownToggle color="transparent" className="dropdown-form p-0">
          <i className="icon-plus" />
        </DropdownToggle>
        <DropdownMenu className="chat-icon dropdown-menu-start">
          <DropdownItem className="mb-2">
            <SvgIcon className="feather" iconId="camera" />
          </DropdownItem>
          <DropdownItem>
            <SvgIcon className="feather" iconId="paperclip" />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ChatDropMenu;
