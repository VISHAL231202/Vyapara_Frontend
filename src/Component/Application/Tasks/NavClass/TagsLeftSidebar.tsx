import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon';
import { tagData } from '../../../../Data/Application/Tasks/Tasks';
import { TasksPropsType } from '../../../../Type/Application/Tasks/Tasks';
import { Href, Tags } from '../../../../utils/Constant';
import CreateTag from './CreateTag';

const TagsLeftSidebar = ({activeTab,activeToggle}:TasksPropsType) => {
  const [tagModal, setTagModal] = useState(false);
  const tagToggle = () => setTagModal(!tagModal);
  const tagCallback = useCallback((modal: boolean) => {
    setTagModal(modal);
  }, []);
  return (
    <>
      <NavItem>
        <span className="main-title">
          {Tags}
          <span className="pull-right">
            <Link to={Href} onClick={tagToggle}>
              <SvgIcon className='feather stroke-primary' iconId='plus-circle'  />
            </Link>
          </span>
        </span>
      </NavItem>
      <CreateTag tagCallback={tagCallback} tagModal={tagModal} />
      {tagData.map((item) => (
        <NavItem key={item.id}>
          <Link
            to={Href}
            className={activeTab === item.activeTab ? "show" : ""}
            onClick={() => {
              activeToggle(item.activeTab);
            }}
          >
            <span className="title"> {item.title}</span>
          </Link>
        </NavItem>
      ))}
    </>
  )
}

export default TagsLeftSidebar