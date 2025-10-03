import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import { Btn, LI } from '../../../../AbstractElements'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'
import { sideBarData, sideBarData2 } from '../../../../Data/Application/Bookmark/Bookmark'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks'
import { setAddModal, setTagModal, updateActiveTabs } from '../../../../ReduxToolkit/Reducers/BookmarkTabSlice'
import { Href, NewBookmark, Tags, Views } from '../../../../utils/Constant'
import BookmarkModal from './BookmarkModal'
import ModalTag from './ModalTag'

const NavTab = () => {
  const { activeTabs } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const onHandleClick = (id: string) => {dispatch(updateActiveTabs(id));};
  return (
    <Nav className="main-menu">
      <NavItem>
        <Btn className="btn-mail w-100" block color='light-primary' onClick={()=>dispatch(setAddModal())}>
          <SvgIcon className='feather me-2' iconId='bookmark' />
            {NewBookmark}
          <BookmarkModal />
        </Btn>
      </NavItem>
      <NavItem>
        <span className="main-title">{Views}</span>
      </NavItem>
      {sideBarData.map((data, index) => (
        <LI key={index}>
          <Link className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} to={Href}>
            <span className="title"> {data.tittle}</span>
          </Link>
        </LI>
      ))}
      <LI><hr /></LI>
      <LI>
        <span className="main-title">{Tags}
          <span className="pull-right" onClick={()=>dispatch(setTagModal())}>
            <Link to={Href}><SvgIcon className='feather stroke-primary' iconId='plus-circle' /></Link>
          </span>
        </span>
      </LI>
      <ModalTag />
      {sideBarData2.map((data, index) => (
        <LI key={index}>
          <Link className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} to={Href}>
            <span className="title"> {data.tittle}</span>
          </Link>
        </LI>
      ))}
    </Nav>
  )
}

export default NavTab