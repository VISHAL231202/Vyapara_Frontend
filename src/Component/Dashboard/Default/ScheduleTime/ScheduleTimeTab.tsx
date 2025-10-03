import { H6 } from "../../../../AbstractElements";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Href } from "../../../../utils/Constant";
import { scheduleTimeTabData } from "../../../../Data/Dashboard/Default/Default";
import { ScheduleTimeTabType } from "../../../../Type/Dashboard/DefaultType";

const ScheduleTimeTab = ({setTabId,tabId}:ScheduleTimeTabType) => {
  return (
    <Nav tabs className="schedule-wrapper simple-list flex-row" id="myTab">
      {scheduleTimeTabData.map((item, i) => (
        <NavItem key={i}>
          <NavLink active={tabId === item.id ? true : false} id={item.id} href={Href} onClick={()=>setTabId(item.id)}>
            <span>{item.day} </span>
            <H6>{item.date}</H6>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default ScheduleTimeTab;
