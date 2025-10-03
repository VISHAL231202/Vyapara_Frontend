import { Nav, NavItem } from "reactstrap";
import { Badges, Btn } from "../../../AbstractElements";
import SvgIcon from "../../../CommonElements/SVG/SvgIcon";
import { Completed, Href, ToDoList } from "../../../utils/Constant";
import { sideBartList } from "../../../Data/Application/Todo/Todo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";

const TodoNavBar = () => {
  const [status,setStatus] = useState([{}])
  const {todoList} = useAppSelector((state)=> state.todo)
  useEffect(()=>{
    setStatus(todoList.filter((data)=> data.status === "completed" ? data : ""))
  },[todoList])
  return (
    <Nav className="main-menu">
      <NavItem>
        <Btn color="primary" block className="bg-primary btn-mail w-100">
          <SvgIcon className="feather me-2" iconId="check-circle" />
          {ToDoList}
        </Btn>
      </NavItem>
      {sideBartList.map((item, i) => (
        <NavItem key={i}>
          <Link to={Href}>
            <span className={`iconbg badge-light-${item.color}`}>
              <SvgIcon iconId={item.icon} className="feather" />
            </span>
            <span className="title ms-2 font-white">{item.tittle}</span>
            {item.badge && status && ( <Badges pill color={item.tittle === "In Process"? "primary": item.color} className="text-white">{item.tittle === Completed ? status.length : todoList.length- status.length}</Badges> )}
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
};

export default TodoNavBar;
