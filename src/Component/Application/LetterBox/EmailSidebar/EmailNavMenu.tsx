import { Nav, NavItem, NavLink } from "reactstrap";
import { Badges } from "../../../../AbstractElements";
import { letterBoxSidebar } from "../../../../Data/Application/LetterBox/LetterBox";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import AddLabel from "./AddLabel";
import { Href, Inbox } from "../../../../utils/Constant";
import { LetterBoxNavType } from "../../../../Type/Application/LetterBox/LetterBox";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const EmailNavMenu: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const {inboxEmail} = useAppSelector((state)=>state.letterBox)
  let starBadges = inboxEmail.filter((data)=> data.star === true && 1)
  return (
    <Nav pills className="main-menu email-category">
      {letterBoxSidebar.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={navId === data.id ? "active" : ""} id={data.id} onClick={()=>setNavId(data.id)} href={Href}>
            <SvgIcon className={`feather stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
            <div>
              {data.title}
              {data.badge && <Badges color="">{data.title === Inbox ? inboxEmail.length : starBadges.length}</Badges>}
            </div>
          </NavLink>
        </NavItem>
      ))}
      <AddLabel />
    </Nav>
  );
};

export default EmailNavMenu;
