import { Col } from 'reactstrap';
import SearchInput from './SearchInput';
import { UL } from '../../../AbstractElements';
import ResponsiveSearch from './ResponsiveSearch';
import NotificationHeader from './NotificationHeader/NotificationHeader';
import UserProfile from './UserProfile/UserProfile';
import ZoomInOut from './ZoomInOut/ZoomInOut';

const MainHeader = () => {
  return (
    <Col className="page-main-header">
      <SearchInput />
      <div className="nav-right">
        <UL className="header-right flex-row simple-list overflow-visible">
          {/* <DarkMode /> */}
          <ResponsiveSearch />
          <ZoomInOut />
          {/* <Language /> */}
          <NotificationHeader />
          {/* <BookmarkHeader /> */}
          {/* <CartHeader /> */}
          {/* <MessagesHeader /> */}
          <UserProfile />
        </UL>
      </div>
    </Col>
  );
};

export default MainHeader;
